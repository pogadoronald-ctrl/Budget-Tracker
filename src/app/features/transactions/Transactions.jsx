import { LuReceipt, LuPencil, LuTrash2 } from "react-icons/lu"

import Searchbar from "../../components/layouts/Searchbar"
import DateRange from "../../components/DateRange.jsx"
import Filter from "../../components/Filter.jsx"
import  transactions from "../../components/tables/MockTransactionsData.jsx"

export default function Transactions(){
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-100 p-3"> 
                        <LuReceipt className="text-2xl text-blue-600" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            History
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Track and manage your records
                        </p>
                    </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-sm">
                    Add Transaction
                </button>
            </div>

            <div className="flex items-center gap-4 mt-8">
                <div className="relative w-72 max-w-sm">
                    <Searchbar /> 
                </div>
                <div className="w-58"> 
                    <DateRange />
                </div>
                <div className="w-78"> 
                    <Filter />
                </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="px-6 py-4 font-semibold">DESCRIPTION</th>
                            <th className="px-6 py-4 font-semibold">CATEGORY</th>
                            <th className="px-6 py-4 font-semibold">DATE</th>
                            <th className="px-6 py-4 font-semibold">TYPE</th>
                            <th className="px-6 py-4 font-semibold text-right">AMOUNT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction) => (
                            <tr
                                key={transaction.id}
                                className="border-t border-gray-100 hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    <div className="flex gap-4 items-center">
                                        <div className="text-s text-gray-700 bg-gray-200 rounded-xl px-2 py-2">
                                            <LuReceipt />
                                        </div>
                                        {transaction.description}
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    <p className="font-medium text-gray-800">
                                        {transaction.category}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {transaction.subcategory}
                                    </p>
                                </td>

                                <td className="px-6 py-4 text-gray-700">
                                    {transaction.date}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                            transaction.type === "Income"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-green-100 text-green-600"
                                        }`}
                                    >
                                        {transaction.type}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-4">
                                        <span className="font-semibold text-gray-800">
                                            {transaction.amount}
                                        </span>

                                        <button className="text-gray-500 transition hover:text-green-600">
                                            <LuPencil size={18} />
                                        </button>

                                        <button className="text-gray-500 transition hover:text-red-600">
                                            <LuTrash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
