import { Routes, Route } from 'react-router-dom'

import MainLayout from './app/layouts/MainLayout.jsx'
import Dashboard from './app/features/dashboard/Dashboard.jsx'
import Transactions from './app/features/transactions/Transactions.jsx'
import Income from './app/features/income/Income.jsx'
import Budgets from './app/features/budgets/Budgets.jsx'
import Recurring from './app/features/recurring/Recurring.jsx'
import Profile from './app/features/profile/Profile.jsx'

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/transactions" element={<Transactions />}></Route>
                <Route path="/income" element={<Income />}></Route>
                <Route path="/budgets" element={<Budgets />}></Route>
                <Route path="/recurring" element={<Recurring />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Route>
        </Routes>
    )
}

