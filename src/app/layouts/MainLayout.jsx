import './MainLayout.css'
import Header from '../components/Header.jsx'

function MainLayout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="content">
                {children}
            </main>
        </div>
    )
}

export default MainLayout