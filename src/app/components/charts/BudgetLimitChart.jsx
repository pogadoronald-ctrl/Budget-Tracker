import { Progress } from "react";
import { categories } from "../mockData/BudgetData";

function BudgetLimitChart() {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg">
                    Budget Progress
                </h2>
            </div>

            <div className="space-y-5">
                {categories.map((categories) => {
                    const percentage = Math.min(
                        (categories.spent / categories.limit) * 100,
                        100
                    );

                    return (
                        <div key={categories.title}>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-medium">
                                    {categories.title}
                                </span>

                                <span className="text-gray-500">
                                    ₱{categories.spent.toLocaleString()} / ₱
                                    {categories.limit.toLocaleString()}
                                </span>
                            </div>

                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all ${
                                        percentage < 50
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