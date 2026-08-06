import { useState, useRef, useEffect } from "react";
import { LuCalendarRange } from "react-icons/lu";

export default function DateRange() {
    const [range, setRange] = useState("month");
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const labels = {
        week: "This Week",
        month: "This Month",
        year: "This Year",
        custom: "Custom Range",
    };

    return (
        <div className="relative w-full" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-2.5 shadow-sm hover:border-blue-500"
            >
                <div className="flex items-center gap-2">
                    <LuCalendarRange
                        size={18}
                        className="text-gray-500"
                    />
                    <span className="text-sm">
                        {labels[range]}
                    </span>
                </div>

                <span className="text-xs text-gray-400">▼</span>
            </button>

            {open && (
                <div className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                    <div className="space-y-2">
                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
                            onClick={() => {
                                setRange("week");
                                setOpen(false);
                            }}
                        >
                            This Week
                        </button>

                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
                            onClick={() => {
                                setRange("month");
                                setOpen(false);
                            }}
                        >
                            This Month
                        </button>

                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
                            onClick={() => {
                                setRange("year");
                                setOpen(false);
                            }}
                        >
                            This Year
                        </button>

                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
                            onClick={() => setRange("custom")}
                        >
                            Custom Range
                        </button>
                    </div>

                    {range === "custom" && (
                        <div className="mt-4 border-t pt-4">
                            <label className="mb-1 block text-xs text-gray-500">
                                From
                            </label>
                            <input
                                type="date"
                                className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                            />

                            <label className="mb-1 block text-xs text-gray-500">
                                To
                            </label>
                            <input
                                type="date"
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                            />

                            <button
                                className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
                                onClick={() => setOpen(false)}
                            >
                                Apply
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}