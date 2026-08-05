import { LuReceipt } from "react-icons/lu"

import Searchbar from "../../components/Searchbar.jsx"
import DateRange from "../../components/DateRange.jsx"
import Filter from "../../components/Filter.jsx"


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
                <div className="w-78"> 
                    <DateRange />
                </div>
                <div className="w-78"> 
                    <Filter />
                </div>
            </div>
        </>
    )
}
