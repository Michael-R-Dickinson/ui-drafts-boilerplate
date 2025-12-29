import { Utensils, Car, ShoppingBag, Film, Zap, Heart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { transactions, categories } from "../data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  utensils: Utensils,
  car: Car,
  "shopping-bag": ShoppingBag,
  film: Film,
  zap: Zap,
  heart: Heart,
  "trending-up": TrendingUp,
}

export function RecentTransactions() {
  const getCategoryColor = (categoryName: string) => {
    const category = categories.find((c) => c.name === categoryName)
    return category ? category.gradient : "from-slate-500 to-slate-600"
  }

  return (
    <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-indigo-100 dark:border-purple-900/30 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Recent Transactions
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Your latest financial activity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {transactions.map((transaction) => {
            const Icon = iconMap[transaction.icon] || Utensils
            const gradient = getCategoryColor(transaction.category)
            const isPositive = transaction.amount > 0

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-md group-hover:shadow-lg transition-shadow`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Transaction Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-white truncate">
                      {transaction.merchant}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${gradient} text-white text-xs border-0`}
                      >
                        {transaction.category}
                      </Badge>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {new Date(transaction.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right ml-4">
                  <p
                    className={`text-lg font-bold ${
                      isPositive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {isPositive ? "+" : ""}${Math.abs(transaction.amount).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
          View All Transactions
        </button>
      </CardContent>
    </Card>
  )
}
