import { ArrowUpRight, Send, Plus, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTotalBalance, getMonthlyChange } from "../data"

export function HeroBalanceCard() {
  const balance = getTotalBalance()
  const change = getMonthlyChange()

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 shadow-2xl shadow-indigo-500/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        {/* Balance Section */}
        <div className="mb-8">
          <p className="text-indigo-100 text-sm font-medium mb-2">Total Balance</p>
          <h2 className="text-5xl font-bold text-white mb-3">
            ${balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
          <div className="flex items-center gap-2 text-indigo-50">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">
              +${change.value}% from last month
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Button
            className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            size="lg"
          >
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
          <Button
            className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            size="lg"
          >
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Request
          </Button>
          <Button
            className="bg-white hover:bg-white/90 text-indigo-600 border-0 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            size="lg"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Money
          </Button>
        </div>
      </div>
    </div>
  )
}
