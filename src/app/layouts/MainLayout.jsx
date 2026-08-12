import './MainLayout.css'
import Header from '../components/header/Header.jsx'
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <> 
            <div className="layout">
                <Header />
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    )
}