const SITE_URL = "https://www.photovoltaikreinigung-oberschwaben.de"

const Breadcrumbs = ({ items }) => {
    const list = [
        { name: "Startseite", path: "/" },
        ...items,
    ]
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": list.map((item, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": item.name,
            "item": `${SITE_URL}${item.path}`,
        })),
    }
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export default Breadcrumbs
