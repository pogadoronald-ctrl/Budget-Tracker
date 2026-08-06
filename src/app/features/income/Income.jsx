import { LuWallet } from "react-icons/lu"
import Searchbar from "../../components/Searchbar"
import DateRange from "../../components/DateRange"

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
        </>
    )
}