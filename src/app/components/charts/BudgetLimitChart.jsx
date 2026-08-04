import { Progress } from "react";

const budgets = [
    { category: "Food", spent: 12000, limit: 15000 },
    { category: "Bills", spent: 8000, limit: 10000 },
    { category: "Transportation", spent: 5000, limit: 7000 },
    { category: "Entertainment", spent: 3500, limit: 5000 },
];

function BudgetLimitChart() {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg">
                    Budget Progress
                </h2>
            </div>

            <div className="space-y-5">
                {budgets.map((budget) => {
                    const percentage = Math.min(
                        (budget.spent / budget.limit) * 100,
                        100
                    );

                    return (
                        <div key={budget.category}>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-medium">
                                    {budget.category}
                                </span>

                                <span className="text-gray-500">
                                    ₱{budget.spent.toLocaleString()} / ₱
                                    {budget.limit.toLocaleString()}
                                </span>
                            </div>

                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all ${
                                        percentage < 70
                                            ? "bg-green-500"
                                            : percentage < 90
                                            ? "bg-yellow-500"
                                            : "bg-red-500"
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default BudgetLimitChart;