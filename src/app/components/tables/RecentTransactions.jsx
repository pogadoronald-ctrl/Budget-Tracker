import {
    LuUtensils,
    LuReceipt,
    LuCar,
    LuFilm,
    LuWallet,
    LuShoppingBag,
} from "react-icons/lu";
import  transactions from "./MockTransactionsData.jsx";

const categoryIcons = {
    Food: <LuUtensils className="text-orange-500" />,
    Bills: <LuReceipt className="text-blue-500" />,
    Transportation: <LuCar className="text-green-500" />,
    Entertainment: <LuFilm className="text-purple-500" />,
    Shopping: <LuShoppingBag className="text-pink-500" />,
    Income: <LuWallet className="text-emerald-500" />,
};

function RecentTransactionsTable() {
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg">
                    Recent Transactions
                </h2>

                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    View All
                </button>
            </div>

            <div className="space-y-2">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                                {categoryIcons[transaction.category]}
                            </div>

                            <div>
                                <p className="font-medium text-gray-800">
                                    {transaction.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>{transaction.category}</span>
                                    <span>•</span>
                                    <span>{transaction.date}</span>
                                </div>
                            </div>
                        </div>

                        <p
                            className={`font-semibold ${
                                transaction.amount >= 0
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {transaction.amount >= 0 ? "+" : "-"}₱
                            {Math.abs(transaction.amount).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RecentTransactionsTable;