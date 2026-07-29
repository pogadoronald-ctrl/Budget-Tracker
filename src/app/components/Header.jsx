import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">Logo</div>

            <nav className="nav font-bold text-gray-700">
                <a href="#">Overview</a>
                <a href="#">Transactions</a>
                <a href="#">Budgets</a>
                <a href="#">Categories</a>
                <a href="#">Budgets</a>
                <a href="#">Recurring</a>
            </nav>

            <div className="profile">Profile</div>
        </header>
    )
}

export default Header