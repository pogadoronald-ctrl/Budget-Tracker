import "./dashboard.css";
import {
    LuWallet,
    LuTrendingUp,
    LuTrendingDown,
    LuPiggyBank
} from "react-icons/lu";

function Dashboard() {
    return (
        <div className="grid grid-cols-4 gap-6">
            <SummaryCard
                title="Current Balance"
                amount="37,000"
                type="balance"
                icon={<LuWallet className="text-blue-500" />}
            />
            <SummaryCard
                title="Total Income"
                amount="10,000"
                type="income"
                icon={<LuTrendingUp className="text-green-500" />}
            />
            <SummaryCard
                title="Total Expenses"
                amount="5,000"
                type="expenses"
                icon={<LuTrendingDown className="text-red-500" />}
            />
            <SummaryCard
                title="Net Savings"
                amount="2,500"
                type="savings"
                icon={<LuPiggyBank className="text-yellow-500" />}
            />

        </div>
    );
}

function SummaryCard({ title, amount, type, icon }) {
    return (
        <div className={`card ${type}`}>
            <div className= "flex items-center justify-between"> 
                <h3>{title}</h3>
                <span className="text-2xl">{icon}</span>
            </div>

            <p>₱{amount}</p>
        </div>
    );
}

export default Dashboard;