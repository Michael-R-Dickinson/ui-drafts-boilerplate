import { Utensils, Car, ShoppingBag, Film, Zap, Heart } from "lucide-react"
import { categories } from "../data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  utensils: Utensils,
  car: Car,
  "shopping-bag": ShoppingBag,
  film: Film,
  zap: Zap,
  heart: Heart,
}

export function CategoryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const Icon = iconMap[category.icon] || Utensils
        const percentage = (category.spent / category.budget) * 100
        const isOverBudget = percentage > 100

        return (
          <div
            key={category.id}
            className={`
              group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-6
              shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
              border-2 ${isOverBudget ? "border-red-200 dark:border-red-900" : "border-indigo-100 dark:border-purple-900/30"}
            `}
          >
            {/* Gradient background decoration */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-opacity`}
            />

            {isOverBudget && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
            )}

            <div className="relative z-10">
              {/* Icon and Name */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {isOverBudget && (
                  <span className="px-2 py-1 text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400 rounded-full">
                    Over Budget
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {category.name}
              </h3>

              {/* Amounts */}
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    ${category.spent.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    of ${category.budget.toLocaleString()}
                  </p>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    isOverBudget
                      ? "text-red-600 dark:text-red-400"
                      : percentage > 80
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-emerald-600 dark:text-emerald-400"
                  }`}
                >
                  {percentage.toFixed(0)}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className={`h-full transition-all duration-300 bg-gradient-to-r ${category.gradient}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
                {isOverBudget && (
                  <div className="absolute -top-1 -right-1 w-4 h-4">
                    <div className="w-full h-full bg-red-500 rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              {/* Remaining amount */}
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {isOverBudget ? (
                  <>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      ${(category.spent - category.budget).toLocaleString()}
                    </span>{" "}
                    over budget
                  </>
                ) : (
                  <>
                    <span className="font-semibold">
                      ${(category.budget - category.spent).toLocaleString()}
                    </span>{" "}
                    remaining
                  </>
                )}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
