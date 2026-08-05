import { LuCalendarRange } from "react-icons/lu";

export default function DateRange() {
    return (
        <div className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 shadow-sm">
            <LuCalendarRange size={18} className="text-gray-500" />

            <input
                type="date"
                className="w-28 outline-none text-xs"
            />

            <span className="text-xs text-gray-400">to</span>

            <input
                type="date"
                className="w-28 outline-none text-xs"
            />
        </div>
    );
}