import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

function IncomeExpenseChart() {
    const data = [
        { month: "Jan", income: 50000, expenses: 30000 },
        { month: "Feb", income: 48000, expenses: 35000 },
        { month: "Mar", income: 52000, expenses: 31000 },
    ];

    return (
        <> 
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg">
                    Income vs. Expenses
                </h2>

                
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: "#6B7280" }}  />
                    <YAxis width="auto"  tick={{ fill: "#6B7280" }} />
                    <Tooltip />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{   top: "-8px", }}
                    />
                    <Bar dataKey="income" fill="#c40c0c" radius={[8, 8, 0, 0]}/>
                    <Bar dataKey="expenses" fill="#170aa8" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default IncomeExpenseChart;