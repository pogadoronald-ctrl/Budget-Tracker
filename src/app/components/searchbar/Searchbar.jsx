import { LuSearch } from "react-icons/lu"

export default function Searchbar(){
    return(
        <>
        <LuSearch size={18} className="absolute left-4 text-gray-400  top-1/2 -translate-y-1/2 " />
        <input 
            type="text" 
            placeholder="Search description..." 
            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 
                        pl-11 pr -4 text-sm placeholder:text-gray-400 focus:outline-none 
                        focus:ring-1 focus:ring-black-300 focus:border-black-300">
        </input>
        </>
    )
}