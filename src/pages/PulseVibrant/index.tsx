import { useState } from "react"
import { Moon, Sun, Bell, Search } from "lucide-react"
import { Sidebar } from "./components/Sidebar"
import { HeroBalanceCard } from "./components/HeroBalanceCard"
import { SpendingInsights } from "./components/SpendingInsights"
import { SpendingChart } from "./components/SpendingChart"
import { CategoryCards } from "./components/CategoryCards"
import { RecentTransactions } from "./components/RecentTransactions"
import { Button } from "@/components/ui/button"

export default function PulseVibrant() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 transition-colors duration-300">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-[280px] min-h-screen">
          {/* Top Bar */}
          <header className="sticky top-0 z-40 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-indigo-100 dark:border-purple-900/30 shadow-sm">
            <div className="h-full px-8 flex items-center justify-between">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-400">Dashboard</span>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Overview</span>
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white w-64"
                  />
                </div>

                {/* Notifications */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                </Button>

                {/* Theme Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-8 max-w-[1440px] mx-auto">
            <div className="space-y-8">
              {/* Page Title */}
              <div>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  Financial Dashboard
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                  Track your spending, manage budgets, and achieve your financial goals
                </p>
              </div>

              {/* Hero Balance Card */}
              <HeroBalanceCard />

              {/* Spending Insights */}
              <SpendingInsights />

              {/* Spending Chart */}
              <SpendingChart />

              {/* Category Cards */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Budget Categories
                </h2>
                <CategoryCards />
              </div>

              {/* Recent Transactions */}
              <RecentTransactions />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
