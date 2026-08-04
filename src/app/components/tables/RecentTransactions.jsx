import {
    LuUtensils,
    LuReceipt,
    LuCar,
    LuFilm,
    LuWallet,
    LuShoppingBag,
} from "react-icons/lu";

const categoryIcons = {
    Food: <LuUtensils className="text-orange-500" />,
    Bills: <LuReceipt className="text-blue-500" />,
    Transportation: <LuCar className="text-green-500" />,
    Entertainment: <LuFilm className="text-purple-500" />,
    Shopping: <LuShoppingBag className="text-pink-500" />,
    Income: <LuWallet className="text-emerald-500" />,
};

function RecentTransactionsTable() {
const transactions = [
    {
        id: 1,
        date: "Jul 31, 2026",
        description: "Monthly Salary",
        category: "Income",
        amount: 50000,
    },
    {
        id: 2,
        date: "Jul 30, 2026",
        description: "Grocery Shopping",
        category: "Food",
        amount: -1250,
    },
    {
        id: 3,
        date: "Jul 30, 2026",
        description: "Coffee",
        category: "Food",
        amount: -180,
    },
    {
        id: 4,
        date: "Jul 29, 2026",
        description: "Electric Bill",
        category: "Bills",
        amount: -3200,
    },
    {
        id: 5,
        date: "Jul 29, 2026",
        description: "Water Bill",
        category: "Bills",
        amount: -950,
    },
    {
        id: 6,
        date: "Jul 28, 2026",
        description: "Internet Subscription",
        category: "Bills",
        amount: -1699,
    },
    {
        id: 7,
        date: "Jul 28, 2026",
        description: "Gas",
        category: "Transportation",
        amount: -1800,
    },
    {
        id: 8,
        date: "Jul 27, 2026",
        description: "Grab Ride",
        category: "Transportation",
        amount: -320,
    },
    {
        id: 9,
        date: "Jul 27, 2026",
        description: "Netflix",
        category: "Entertainment",
        amount: -549,
    },
    {
        id: 10,
        date: "Jul 26, 2026",
        description: "Cinema Tickets",
        category: "Entertainment",
        amount: -650,
    },
    {
        id: 11,
        date: "Jul 25, 2026",
        description: "Freelance Project",
        category: "Income",
        amount: 12000,
    },
    {
        id: 12,
        date: "Jul 25, 2026",
        description: "Restaurant Dinner",
        category: "Food",
        amount: -1450,
    },
    {
        id: 13,
        date: "Jul 24, 2026",
        description: "Mobile Load",
        category: "Utilities",
        amount: -299,
    },
    {
        id: 14,
        date: "Jul 24, 2026",
        description: "Pharmacy",
        category: "Healthcare",
        amount: -780,
    },
    {
        id: 15,
        date: "Jul 23, 2026",
        description: "Clothing Purchase",
        category: "Shopping",
        amount: -2499,
    },
    {
        id: 16,
        date: "Jul 22, 2026",
        description: "Dividend Payout",
        category: "Income",
        amount: 3500,
    },
    {
        id: 17,
        date: "Jul 21, 2026",
        description: "Bookstore",
        category: "Education",
        amount: -890,
    },
    {
        id: 18,
        date: "Jul 20, 2026",
        description: "Gym Membership",
        category: "Health & Fitness",
        amount: -1200,
    },
    {
        id: 19,
        date: "Jul 19, 2026",
        description: "Birthday Gift",
        category: "Others",
        amount: -1500,
    },
    {
        id: 20,
        date: "Jul 18, 2026",
        description: "Savings Deposit",
        category: "Savings",
        amount: -5000,
    },
];

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