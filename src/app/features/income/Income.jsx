import { LuWallet, LuBanknote, LuClipboardList, LuChartColumnIncreasing, LuPencil, LuTrash2 } from "react-icons/lu"
import Searchbar from "../../components/layouts/Searchbar"
import DateRange from "../../components/DateRange"
import SummaryCard from "../../components/SummaryCard"
import transactions from "../../components/tables/MockTransactionsData"

export default function Income(){
    return(
        <>
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-100">
                        <LuWallet className="text-2xl text-blue-600" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            Wallet
                        </h1>
                        <p className="text-sm text-gray-500">
                            Monitor your income sources
                        </p>
                    </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-sm">
                    Add Income
                </button>
            </div>

            <div className="flex items-center gap-4 mt-8">
                <div className="relative w-72 max-w-sm"> 
                    <Searchbar />
                </div>
                <div className="w-58">
                    <DateRange />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
                <SummaryCard 
                    title="Total Income"
                    amount="₱30,000"
                    icon={<LuBanknote className="text-gray-500" />}
                />
                <SummaryCard 
                    title="Income Entries"
                    amount="5"
                    icon={<LuClipboardList className="text-gray-500" />}
                />
                <SummaryCard 
                    title="Income Growth"
                    amount="+10.0%"
                    icon={<LuChartColumnIncreasing className="text-gray-500" />}
                />
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="px-6 py-4 font-semibold">DESCRIPTION</th>
                            <th className="px-6 py-4 font-semibold">CATEGORY</th>
                            <th className="px-6 py-4 font-semibold">DATE</th>
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
                                    <div className="flex gap-4 ">
                                        <div className="text-s bg-green-200 text-green-700 rounded-xl px-2 py-2">
                                            <LuWallet />
                                        </div>
                                        {transaction.description}
                                    </div>
                                    
                                </td>

                                <td className="px-6 py-4">
                                    <p className="font-medium text-gray-800">
                                        {transaction.category}
                                    </p>
                                </td>

                                <td className="px-6 py-4 text-gray-700">
                                    {transaction.date}
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