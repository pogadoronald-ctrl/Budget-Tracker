import { useEffect, useRef, useState } from "react";
import { LuCalendarRange } from "react-icons/lu";

export default function DateRange() {
    const [range, setRange] = useState("month");
    const [label, setLabel] = useState("This Month");

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

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

    const handlePreset = (value) => {
        setRange(value);

        switch (value) {
            case "week":
                setLabel("This Week");
                setOpen(false);
                break;

            case "month":
                setLabel("This Month");
                setOpen(false);
                break;

            case "year":
                setLabel("This Year");
                setOpen(false);
                break;

            case "custom":
                break;

            default:
                break;
        }
    };

    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    const handleApply = () => {
        if (!fromDate || !toDate) return;

        const from = new Date(fromDate);
        const to = new Date(toDate);

        let text;

        if (from.getFullYear() === to.getFullYear()) {
            text = `${from.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            })} - ${to.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            })}`;
        } else {
            text = `${formatDate(fromDate)} - ${formatDate(toDate)}`;
        }

        setLabel(text);
        setOpen(false);
    };

    return (
        <div className="relative w-full" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-2.5 shadow-sm hover:border-blue-500 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <LuCalendarRange
                        size={18}
                        className="text-gray-500"
                    />

                    <span className="text-sm font-medium">
                        {label}
                    </span>
                </div>

                <span className="text-xs text-gray-400">▼</span>
            </button>

            {open && (
                <div className="absolute right-0 z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                    <div className="space-y-1">
                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
                            onClick={() => handlePreset("week")}
                        >
                            This Week
                        </button>

                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
                            onClick={() => handlePreset("month")}
                        >
                            This Month
                        </button>

                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
                            onClick={() => handlePreset("year")}
                        >
                            This Year
                        </button>

                        <button
                            className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
                            onClick={() => handlePreset("custom")}
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
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                            />

                            <label className="mb-1 block text-xs text-gray-500">
                                To
                            </label>

                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                            />

                            <button
                                onClick={handleApply}
                                className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700"
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