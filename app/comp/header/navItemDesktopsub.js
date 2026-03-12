import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


const NavItemDesktopSub = ({href, name, icon, linkgroup}) => {

    const router = useRouter()
    const [location, setLocation] = useState()

    const isActive = location === href

    useEffect(() => {
        setLocation(router.pathname)
    }, [router.pathname])


    return (
        <Link href={href} className="desktop-nav-link" style={{
            display: "flex",
            alignItems: "center",
            padding: "0.7rem 1.2rem",
            cursor: "pointer",
            textDecoration: "none",
            color: isActive ? "#4E9940" : "#333",
            backgroundColor: isActive ? "#f0f9f0" : "white",
            borderLeft: isActive ? "3px solid #4E9940" : "3px solid transparent",
            transition: "all 0.15s ease",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.95rem",
                fontWeight: isActive ? "700" : "500",
                textDecoration: "none",
            }}>{icon}{name}</div>
        </Link>
    )
}

export default NavItemDesktopSub
