export default function SummaryCard({ title, amount, icon, className="", }) {
    console.log(className)
    return (
        <div
            className={`
                bg-white rounded-xl p-6
                shadow-[0_2px_10px_rgba(0,0,0,0.08)]
                hover:-translate-y-1
                hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
                transition-all duration-200
                ${className}
            `}
        >
            <div className="flex items-center justify-between">
                <h5 className="text-base text-gray-500">
                    {title}
                </h5>

                <span className="text-2xl">
                    {icon}
                </span>
            </div>

            <p className="mt-2 text-xl font-bold text-gray-900">
                ₱{amount}
            </p>
        </div>
    );
}