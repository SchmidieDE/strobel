import { useEffect, useRef, useState } from "react"
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CloseIcon from '@mui/icons-material/Close'

const PHONE = "491708083239"
const PRESET_TEXT = "Hallo Strobel GbR, ich habe eine Frage:"
const WA_URL = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(PRESET_TEXT)}`

const Whatsapp = () => {
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef(null)

    useEffect(() => {
        if (!open) return
        const onKey = (e) => { if (e.key === "Escape") setOpen(false) }
        const onClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener("keydown", onKey)
        document.addEventListener("mousedown", onClick)
        return () => {
            document.removeEventListener("keydown", onKey)
            document.removeEventListener("mousedown", onClick)
        }
    }, [open])

    return (
        <div ref={wrapperRef} style={{position: "fixed", bottom: "24px", right: "24px", zIndex: 9999}}>
            {open && (
                <div className="wa-bubble" role="dialog" aria-label="WhatsApp Chat starten" style={{
                    position: "absolute",
                    bottom: "76px",
                    right: 0,
                    width: "270px",
                    backgroundColor: "white",
                    borderRadius: "16px",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)",
                    padding: "14px 14px 12px 14px",
                    overflow: "hidden",
                }}>
                    <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px"}}>
                        <div style={{
                            width: "32px", height: "32px", borderRadius: "50%",
                            backgroundColor: "#25D366",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <WhatsAppIcon sx={{fontSize: 20, color: "white"}}/>
                        </div>
                        <div style={{flex: 1, lineHeight: 1.15}}>
                            <div style={{fontWeight: 700, fontSize: "0.95rem", color: "#111"}}>Strobel GbR</div>
                            <div style={{fontSize: "0.72rem", color: "#4caf50", fontWeight: 600}}>● Online</div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Schließen"
                            style={{
                                background: "transparent", border: "none", padding: "4px",
                                cursor: "pointer", borderRadius: "8px", display: "flex",
                            }}
                        >
                            <CloseIcon sx={{fontSize: 18, color: "#888"}}/>
                        </button>
                    </div>
                    <div style={{
                        backgroundColor: "#f3f4f6",
                        borderRadius: "12px",
                        padding: "10px 12px",
                        fontSize: "0.88rem",
                        color: "#222",
                        marginBottom: "12px",
                        lineHeight: 1.4,
                    }}>
                        Hallo! Wir freuen uns auf Ihre Nachricht. Klick öffnet WhatsApp.
                    </div>
                    <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        style={{
                            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                            backgroundColor: "#25D366",
                            color: "white",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            textDecoration: "none",
                            padding: "10px 14px",
                            borderRadius: "10px",
                            transition: "background-color 0.15s ease, transform 0.15s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1ebe57" }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#25D366" }}
                    >
                        <WhatsAppIcon sx={{fontSize: 20}}/>
                        Chat starten
                    </a>
                </div>
            )}

            <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "WhatsApp Chat schließen" : "WhatsApp Chat öffnen"}
                aria-expanded={open}
                className="wa-fab"
                style={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "#25D366",
                    color: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(37,211,102,0.45), 0 0 0 4px rgba(37,211,102,0.12)",
                    padding: 0,
                }}
            >
                {!open && <span className="wa-ring" aria-hidden="true"/>}
                <WhatsAppIcon sx={{fontSize: 32, color: "white", position: "relative", zIndex: 1}}/>
            </button>
        </div>
    )
}

export default Whatsapp
