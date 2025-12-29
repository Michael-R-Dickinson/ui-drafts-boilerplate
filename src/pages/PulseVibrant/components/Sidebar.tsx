import { Home, TrendingUp, CreditCard, PieChart, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navigation = [
  { name: "Dashboard", icon: Home, href: "#", active: true },
  { name: "Analytics", icon: TrendingUp, href: "#", active: false },
  { name: "Transactions", icon: CreditCard, href: "#", active: false },
  { name: "Budgets", icon: PieChart, href: "#", active: false },
  { name: "Settings", icon: Settings, href: "#", active: false },
]

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-[280px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900 border-r border-indigo-100 dark:border-purple-900/30">
      <div className="flex flex-col h-full p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <PieChart className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            PulseVibrant
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  item.active
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                    : "text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:shadow-sm"
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </a>
          ))}
        </nav>

        {/* User Profile */}
        <div className="mt-auto p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-indigo-200 dark:border-indigo-800">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                John Doe
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
