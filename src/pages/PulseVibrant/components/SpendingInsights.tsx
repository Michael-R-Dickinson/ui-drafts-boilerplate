import { TrendingDown, TrendingUp, DollarSign } from "lucide-react"
import { getThisMonthSpending, getLastMonthSpending, getTopCategory } from "../data"

export function SpendingInsights() {
  const thisMonth = getThisMonthSpending()
  const lastMonth = getLastMonthSpending()
  const topCategory = getTopCategory()
  const percentChange = ((thisMonth - lastMonth) / lastMonth) * 100

  const insights = [
    {
      title: "This Month",
      value: `$${thisMonth.toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
      gradient: "from-cyan-500 to-blue-600",
      icon: DollarSign,
      iconBg: "from-cyan-500 to-blue-600",
    },
    {
      title: "vs Last Month",
      value: `${percentChange > 0 ? "+" : ""}${percentChange.toFixed(1)}%`,
      gradient: "from-purple-500 to-pink-600",
      icon: percentChange > 0 ? TrendingUp : TrendingDown,
      iconBg: "from-purple-500 to-pink-600",
    },
    {
      title: "Top Category",
      value: topCategory.name,
      gradient: "from-emerald-500 to-teal-600",
      icon: DollarSign,
      iconBg: "from-emerald-500 to-teal-600",
      subtitle: `$${topCategory.spent.toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {insights.map((insight, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          style={{
            background: `linear-gradient(135deg, ${insight.gradient.includes("cyan") ? "#06b6d4" : insight.gradient.includes("purple") ? "#8b5cf6" : "#10b981"} 0%, ${insight.gradient.includes("blue") ? "#2563eb" : insight.gradient.includes("pink") ? "#ec4899" : "#14b8a6"} 100%)`,
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div
                className="p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg"
              >
                <insight.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <p className="text-white/80 text-sm font-medium mb-2">{insight.title}</p>
            <p className="text-3xl font-bold text-white mb-1">{insight.value}</p>
            {insight.subtitle && (
              <p className="text-white/70 text-sm font-medium">{insight.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
