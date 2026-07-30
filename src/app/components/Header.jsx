import './Header.css'
import logo from '../../assets/budgio-logo-w-title.svg'
import { LuUser } from "react-icons/lu";



function Header() {
    return (
        <header className="header shadow-md">
            <div className="logo">
                <img src={logo} alt="Budgio Logo" className="h-20 w-auto"/>
            </div>

            <Pages />

            <div className="profile">
                <LuUser size={28} />
            </div>
        </header>
    )
}

const navLinks = [
    "Overview", 
    "Transactions",
    "Budgets",
    "Categories",
    "Recurring"
]

const navHref = {

}

const Pages = () => {
    return (
        <nav className="nav font-bold text-gray-400">
            {navLinks.map((link) => (
                <a
                    key={link}
                    href=""
                    className="relative text-gray-500 font-semibold 
                        after:absolute after:left-0 after:-bottom-1 
                        after:h-[2px] after:w-full after:bg-green-400 
                        after:translate-y-2 after:opacity-0 
                        hover:after:translate-y-0 hover:after:opacity-100 
                        after:transition-all after:duration-300"
                >
                {link}
                </a>
            ))}
        </nav>
    )
}

export default Header