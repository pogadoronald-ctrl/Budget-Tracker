import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const data = [
    { month: "Jan", spending: 32000 },
    { month: "Feb", spending: 28000 },
    { month: "Mar", spending: 35000 },
    { month: "Apr", spending: 30000 },
    { month: "May", spending: 40000 },
    { month: "Jun", spending: 37000 },
];

function MonthlySpendingChart() {
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg">
                    Monthly Spending
                </h2>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        tick={{ fill: "#6B7280" }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        width="auto"
                        tick={{ fill: "#6B7280" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) =>
                            `₱${(value / 1000).toFixed(0)}k`
                        }
                    />

                    <Tooltip
                        formatter={(value) =>
                            `₱${Number(value).toLocaleString()}`
                        }
                    />

                    <Line
                        type="monotone"
                        dataKey="spending"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        dot={{
                            r: 5,
                            fill: "#3B82F6",
                            strokeWidth: 2,
                            stroke: "#fff",
                        }}
                        activeDot={{
                            r: 7,
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default MonthlySpendingChart;