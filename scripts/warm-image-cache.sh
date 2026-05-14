#!/usr/bin/env bash
#
# warm-image-cache.sh
#
# Warmt den CloudFront-Cache für alle Next.js-Image-Optimizer-Varianten der Seite.
#
# Hintergrund: /_next/image transcodiert on-demand. Ein CloudFront-Cache-Miss
# kostet 1,6-3,3 s (Origin lädt Quelle + transcodiert nach AVIF). Danach liegt
# die Variante 1 Jahr im Cache (minimumCacheTTL) und wird in 40-70 ms geliefert.
#
# DIESES SKRIPT NACH JEDEM DEPLOY AUSFÜHREN, der Bilder, die `quality`-Einstellung
# oder `deviceSizes` in next.config.js ändert — sonst trifft der erste echte
# Besucher jeder Seite den kalten Transcode.
#
# Usage: bash scripts/warm-image-cache.sh

set -euo pipefail

BASE="https://www.photovoltaikreinigung-oberschwaben.de"

PAGES=(
  "/"
  "/photovoltaik"
  "/photovoltaik/leistungen"
  "/photovoltaik/technik"
  "/photovoltaik/rechner"
  "/forstwirtschaft"
  "/forstwirtschaft/leistungen"
  "/forstwirtschaft/fuhrpark"
  "/kontakt"
  "/ueberuns"
)

# CloudFront cached pro Accept-Wert separat (Optimizer-Antwort hat Vary: Accept).
# Beide gängigen Browser-Varianten warmlaufen.
ACCEPT_MODERN="image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
ACCEPT_LEGACY="image/webp,image/png,image/svg+xml,image/*,*/*;q=0.8"

echo "==> Sammle /_next/image-URLs von ${#PAGES[@]} Seiten ..."
URLS_FILE="$(mktemp)"
trap 'rm -f "$URLS_FILE"' EXIT

for path in "${PAGES[@]}"; do
  curl -fsS "${BASE}${path}" \
    | grep -oE '/_next/image\?url=[^" ]+' \
    | sed 's/&amp;/\&/g' \
    >> "$URLS_FILE" || echo "   ! Warnung: ${path} nicht erreichbar"
done

sort -u -o "$URLS_FILE" "$URLS_FILE"
COUNT=$(wc -l < "$URLS_FILE" | tr -d ' ')
echo "==> ${COUNT} eindeutige Bild-Varianten gefunden. Wärme mit 2 Accept-Headern (${COUNT}x2 Requests) ..."

warm_one() {
  local url="$1" accept="$2"
  local out
  out=$(curl -s -o /dev/null \
    -H "Accept: ${accept}" \
    -w "%{http_code} %{time_starttransfer}s" \
    "${BASE}${url}")
  echo "   ${out}  ${url}"
}
export -f warm_one
export BASE

for accept in "$ACCEPT_MODERN" "$ACCEPT_LEGACY"; do
  echo "-- Accept: ${accept%%,*}..."
  # shellcheck disable=SC2016
  xargs -P 8 -I {} bash -c 'warm_one "$@"' _ {} "$accept" < "$URLS_FILE"
done

echo ""
echo "==> Verify: Stichprobe x-cache-Status (sollte 'Hit' sein) ..."
HITS=0; MISSES=0
while read -r url; do
  xc=$(curl -sI -H "Accept: ${ACCEPT_MODERN}" "${BASE}${url}" | grep -i '^x-cache:' | tr -d '\r')
  case "$xc" in
    *Hit*) HITS=$((HITS+1)) ;;
    *)     MISSES=$((MISSES+1)); echo "   ! noch nicht warm: ${url} (${xc})" ;;
  esac
done < "$URLS_FILE"

echo ""
echo "==> Fertig. ${HITS} warm (Hit), ${MISSES} noch kalt."
[ "$MISSES" -eq 0 ] && echo "    Alle Varianten warm — echte Besucher zahlen keinen Cold-Transcode mehr." || echo "    Hinweis: bei verbleibenden Misses Skript erneut laufen lassen."
