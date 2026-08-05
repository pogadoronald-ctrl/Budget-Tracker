export default function Filter(){
    return(
        <>
            <div className="flex flex-row items-center gap-2">
                <select placeholder="All Categories" className="rounded-xl border 
                    border-gray-300 bg-white shadow-sm px-4 py-2.5">
                    <option>All Categories</option>
                </select>
                <select placeholder="All Subcategories" className="rounded-xl border 
                    border-gray-300 bg-white shadow-sm px-4 py-2.5">
                    <option>All Subcategories</option>
                </select>
                <select placeholder="All Types" className="rounded-xl border 
                    border-gray-300 bg-white shadow-sm px-4 py-2.5">
                    <option>All Types</option>
                </select>
            </div>
        </>
    )
}