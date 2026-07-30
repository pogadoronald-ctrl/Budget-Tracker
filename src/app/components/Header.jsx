import './Header.css'
import logo from '../../assets/logo-title.svg'
import { LuUser } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header shadow-md">
            <div className="logo pl-4">
                <img src={logo} alt="Budgio Logo" className="h-14 w-auto"/>
            </div>

            <Pages />

            <div className="profile">
                <LuUser size={28} className="text-gray-600" />
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
        <nav className="nav">
        {navLinks.map((link) => (
            <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
                `${navClass} ${isActive ? activeNavClass : ""}`
            }
            >
            {link.name}
            </NavLink>
        ))}
        </nav>
    );
};


const navClass = `
    relative
    font-semibold
    text-gray-500
    transition-colors
    duration-300
    hover:text-green-400
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-full
    after:bg-green-400
    after:translate-y-2
    after:opacity-0
    after:transition-all
    after:duration-300
    hover:after:translate-y-0
    hover:after:opacity-100
`;
const activeNavClass = `
    text-green-500
    after:translate-y-0
    after:opacity-100
`;

export default Header