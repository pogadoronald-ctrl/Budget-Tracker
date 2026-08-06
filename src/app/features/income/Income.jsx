import { LuWallet, LuBanknote, LuClipboardList, LuTrophy, LuBriefcaseBusiness } from "react-icons/lu"
import Searchbar from "../../components/Searchbar"
import DateRange from "../../components/DateRange"
import SummaryCard from "../../components/SummaryCard"

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
                <div className="w-78">
                    <DateRange />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-8">
                <SummaryCard 
                    title="Total Income"
                    amount="30,000"
                    icon={<LuBanknote className="text-gray-500" />}
                />
                <SummaryCard 
                    title="Income Entries"
                    amount="5"
                    icon={<LuClipboardList className="text-gray-500" />}
                />
                <SummaryCard 
                    title="Largest Income"
                    amount="20,000"
                    icon={<LuTrophy className="text-gray-500" />}
                />
                <SummaryCard 
                    title="Avg. Monthly"
                    amount="33,000"
                    icon={<LuBriefcaseBusiness className="text-gray-500" />}
                />

            </div>
        </>
    )
}