import './Header.css'
import logo from '../../assets/logo-title.svg'
import { LuUser } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header relative shadow-md">
            <div className="logo pl-8">
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
    { name:"Overview", path: "/"},
    { name:"Transactions", path: "/transactions"},
    { name:"Budgets", path: "/budgets"},
    { name:"Categories", path: "Categories"},
    { name:"Recurring", path:"Recurring"}
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
    hover:text-green-400
    transition-colors
    duration-300
    after:absolute
    after:left-0
    after:right-0
    after:bottom-[-24px]
    after:h-[2px]
    after:bg-green-400
    after:scale-x-0
    after:origin-center
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100
`;

const activeNavClass = `
    text-green-500
    after:scale-x-100
`;
export default Header