import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Label,
} from "recharts";

const data = [
    { name: "Food", value: 12000 },
    { name: "Bills", value: 8000 },
    { name: "Transportation", value: 5000 },
    { name: "Entertainment", value: 3500 },
    { name: "Others", value: 2500 },
];

const COLORS = [
    "#3B82F6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
];

const totalSpending = data.reduce((sum, item) => sum + item.value, 0);

function ExpenseCategoryChart() {
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg">
                    Expenses per Category
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="w-full lg:w-1/2 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={50}
                                outerRadius={90}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={entry.name}
                                        fill={COLORS[index]}
                                    />
                                ))}

                                <Label
                                    content={({ viewBox }) => {
                                        const { cx, cy } = viewBox;

                                        return (
                                            <g>
                                                <text
                                                    x={cx}
                                                    y={cy - 10}
                                                    textAnchor="middle"
                                                    fill="#6B7280"
                                                    fontSize={10}
                                                >
                                                    Total
                                                </text>

                                                <text
                                                    x={cx}
                                                    y={cy + 18}
                                                    textAnchor="middle"
                                                    fill="#111827"
                                                    fontSize={16}
                                                    fontWeight="600"
                                                >
                                                    ₱{totalSpending.toLocaleString()}
                                                </text>
                                            </g>
                                        );
                                    }}
                                />
                            </Pie>

                            <Tooltip
                                formatter={(value) =>
                                    `₱${Number(value).toLocaleString()}`
                                }
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="w-full lg:w-1/2">
                    {data.map((item, index) => {
                        const percentage = (
                            (item.value / totalSpending) *
                            100
                        ).toFixed(1);

                        return (
                            <div
                                key={item.name}
                                className="flex items-center justify-between py-1 text-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{
                                            backgroundColor: COLORS[index],
                                        }}
                                    />

                                    <span className="text-gray-800">
                                        {item.name}
                                    </span>
                                </div>

                                <span className="font-medium text-gray-500">
                                    {percentage}%
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ExpenseCategoryChart;