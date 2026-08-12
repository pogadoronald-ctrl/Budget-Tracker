import { LuPencil, LuTrash2, LuPlus, LuX } from "react-icons/lu";

export default function CategoryCard({ title, icon, color, transactions, spent, limit, subcategories= [] }){
     const percentage = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    const exceeded = spent > limit;

    return (
        <div className={`bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mt-4`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: color }}
                    >
                        <span className="text-xl text-white">
                            {icon}
                        </span>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {transactions} Transactions
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                <button className="text-gray-500 transition hover:text-green-600">
                    <LuPencil size={20} />
                </button>

                <button className="text-gray-500 transition hover:text-red-600">
                    <LuTrash2 size={20} />
                </button>
                </div>

            </div>

            <div className="mt-5">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                        Budget
                    </span>

                    <span className="font-medium">
                        ₱{spent.toLocaleString()} / ₱{limit.toLocaleString()}
                    </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className={`h-full ${
                            exceeded ? "bg-red-500" : "bg-blue-600"
                        }`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>

                <p
                    className={`mt-2 text-sm ${
                        exceeded
                            ? "text-red-600"
                            : "text-gray-500"
                    }`}
                >
                    {exceeded
                        ? `Exceeded by ₱${(spent - limit).toLocaleString()}`
                        : `₱${(limit - spent).toLocaleString()} remaining`}
                </p>
            </div>

            <div className="mt-5">
                <div className="flex justify-between"> 
                    <h4 className="text-xs text-gray-500 ">Subcategories</h4>
                    <button>
                        <div className="flex items-center text-xs gap-.5 text-blue-600 hover:text-blue-700">
                            <LuPlus size={14}/>
                            <span> Add</span>
                        </div>
                    </button>
                </div>
                
                <div className="flex flex-wrap gap-2 w-full mt-1">
                    {subcategories.map((subcategory) => (
                        <div
                            key={subcategory}
                            className="flex items-center gap-2 px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                            <span>{subcategory}</span>
                                <button>
                                    <LuX font={14} />
                                </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}