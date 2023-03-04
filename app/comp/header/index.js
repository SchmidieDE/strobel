import Link from "next/link"
import NavItem from "./navitem"



const Header = () => {

    const NavLinks = [{href: "/", name: "Home"},{href: "/kontakt", name: "Kontakt"}, {href: "/", name: "Home"},{href: "/ueberuns", name: "Über uns"} ]

    return (
        <>
            <div style={{backgroundColor: "green"}}>
            <nav style={{display: "block"}}>
            {
                NavLinks.map((e, index) => {
                    const {href, name} = e
                    return (
                        <NavItem href={href} name={name} key={index}/>
                    )
                })
            }
            </nav>
            </div>
        </>
    )
}

export default Header