import {
    LuWallet,
    LuTrendingUp,
    LuTrendingDown,
    LuPiggyBank,
    LuLayoutDashboard
} from "react-icons/lu";

import SummaryCard from "../../components/SummaryCard.jsx";
import ChartCard from "../../components/ChartCard";
import IncomeExpenseChart from "../../components/charts/IncomeExpenseChart";
import ExpenseCategoryChart from "../../components/charts/ExpensesCategoryChart";
import RecentTransactions from "../../components/tables/RecentTransactions";
import MonthlySpendingChart from "../../components/charts/MonthlySpendingChart";
import BudgetLimitChart from "../../components/charts/BudgetLimitChart";
import DateRange from "../../components/DateRange.jsx";


export default function Dashboard() {
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
                <div className="flex items-center">
                    <div className="mr-4">
                        <DateRange />
                    </div>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-sm">
                        Add Transaction
                    </button>
                </div>
                
            </div>

            <div className="grid grid-cols-4 gap-6">
                <SummaryCard 
                    className="border-l-4 border-blue-500"
                    title="Current Balance"
                    amount="₱37,000"
                    icon={<LuWallet className="text-blue-500" />}
                />
                <SummaryCard 
                    className="border-l-4 border-green-500"
                    title="Total Income"
                    amount="₱10,000"
                    icon={<LuTrendingUp className="text-green-500" />}
                />
                <SummaryCard 
                    className="border-l-4 border-red-500"
                    title="Total Expenses"
                    amount="₱5,000"
                    icon={<LuTrendingDown className="text-red-500" />}
                />
                <SummaryCard 
                    className="border-l-4 border-yellow-500"
                    title="Net Savings"
                    amount="2,500"
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

