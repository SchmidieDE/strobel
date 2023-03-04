import Link from "next/link"



const NavItem = ({href, name}) => {


    return (
        <Link  href={href}><a style={{ textDecoration: "none", color: "black", display: "block" }}>{name}</a></Link>
    )
}

export default NavItem