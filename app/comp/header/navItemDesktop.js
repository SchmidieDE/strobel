import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


const NavItemDesktop = ({href, name, icon, linkgroup, hover}) => {

    const router = useRouter()
    const [location, setLocation] = useState()

    const isActive = location === href

    useEffect(() => {
        setLocation(router.pathname)
    }, [router.pathname])


    return (
        <Link href={href} style={{
            padding: "0.5rem 1.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: isActive ? "#4E9940" : linkgroup ? "#4E9940" : "#333",
            backgroundColor: hover ? "rgba(78,153,64,0.06)" : "transparent",
            borderRadius: "8px",
            transition: "all 0.2s ease",
            borderBottom: linkgroup ? "2px solid #4E9940" : "2px solid transparent",
            marginBottom: "-1px",
        }} className="desktop-nav-link">
            <div style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
                fontWeight: linkgroup ? "700" : "600",
                textDecoration: "none",
                whiteSpace: "nowrap",
            }}>{name}{icon}</div>
        </Link>
    )
}

export default NavItemDesktop
