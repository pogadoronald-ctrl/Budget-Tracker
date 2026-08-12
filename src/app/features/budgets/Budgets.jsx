import { useState } from "react";
import { LuTags } from "react-icons/lu"

import CategoryCard from "./categoryCard/CategoryCard";
import { categories } from "../../components/mockData/BudgetData";

export default function Budgets(){
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { label: "All Categories", value: "all" },
        { label: "With Budgets", value: "withBudgets" },
        { label: "Exceeded", value: "exceeded" },
    ];

    return(
        <>
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-100">
                        <LuTags className="text-2xl text-blue-600" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            Categories & Budgets
                        </h1>
                        <p className="text-sm text-gray-500">
                            Organize your spending and set budget limits per category
                        </p>
                    </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-sm">
                    Add Category
                </button>
            </div>

            <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={`px-4 py-3 text-sm font-medium transition-colors ${
                            activeTab === tab.value
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <CategoryCard
                            key={category.id}
                            title={category.title}
                            icon={<Icon className="text-xl text-white" />}
                            color={category.color}
                            transactions={category.transactions}
                            spent={category.spent}
                            limit={category.limit}
                            subcategories={category.subcategories}
                        />
                    );
                })}
            </div>
        </>
    )
}