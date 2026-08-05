import "./dashboard.css";
import {
    LuWallet,
    LuTrendingUp,
    LuTrendingDown,
    LuPiggyBank,
    LuLayoutDashboard
} from "react-icons/lu";

import ChartCard from "../../components/ChartCard";
import IncomeExpenseChart from "../../components/charts/IncomeExpenseChart";
import ExpenseCategoryChart from "../../components/charts/ExpensesCategoryChart";
import RecentTransactions from "../../components/tables/RecentTransactions";
import MonthlySpendingChart from "../../components/charts/MonthlySpendingChart";
import BudgetLimitChart from "../../components/charts/BudgetLimitChart";


function Dashboard() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">

                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-100">
                        <LuLayoutDashboard className="text-2xl text-blue-600" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            Welcome Back!
                        </h1>
                        <p className="text-sm text-gray-500">
                            Here's a summary of your finance
                        </p>
                    </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-sm">
                    Add Transaction
                </button>
            </div>

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

                <div className="col-span-4 grid grid-cols-2 gap-6">
                    <ChartCard >
                        <IncomeExpenseChart />
                    </ChartCard>   
                    <ChartCard >
                        <MonthlySpendingChart />
                    </ChartCard>
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <ChartCard className="h-full">
                                <RecentTransactions />
                            </ChartCard>
                        </div>

                        <div className="flex flex-col gap-6">
                            <ChartCard>
                                <ExpenseCategoryChart />
                            </ChartCard>

                            <ChartCard>
                                <BudgetLimitChart />
                            </ChartCard>
                        </div>
                    </div>
                </div>
            </div>
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