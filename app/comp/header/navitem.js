import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


const NavItem = ({href, name, icon, handleMenu}) => {

    const router = useRouter()
    const [location, setLocation] = useState()

    let subcategory = false
    if (href.split("/").length >= 3) {
        subcategory = true
    }

    const isActive = location === href?.split("#")[0]

    useEffect(() => {
        setLocation(router.pathname)
    }, [router.pathname])


    return (
        <Link href={href} onClick={() => handleMenu()} style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: subcategory ? "0.65rem 1.5rem 0.65rem 3rem" : "0.75rem 1.5rem",
            cursor: "pointer",
            textDecoration: "none",
            color: isActive ? "#4E9940" : "#333",
            backgroundColor: isActive ? "#f0f9f0" : "white",
            borderLeft: isActive ? "3px solid #4E9940" : "3px solid transparent",
            borderBottom: "1px solid #f0f0f0",
            transition: "all 0.15s ease",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                fontSize: subcategory ? "1.05rem" : "1.15rem",
                fontWeight: isActive ? "700" : subcategory ? "500" : "600",
                textDecoration: "none",
            }}>
                {subcategory && <span style={{marginRight: "0.3rem"}}>{icon}</span>}
                {name}
                {!subcategory && icon}
            </div>
        </Link>
    )
}

export default NavItem
