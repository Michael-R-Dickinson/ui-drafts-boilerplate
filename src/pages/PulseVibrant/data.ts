export interface Category {
  id: string
  name: string
  icon: string
  color: string
  gradient: string
  spent: number
  budget: number
}

export interface Transaction {
  id: string
  merchant: string
  category: string
  amount: number
  date: string
  icon: string
}

export const categories: Category[] = [
  {
    id: "food",
    name: "Food & Dining",
    icon: "utensils",
    color: "#6366F1",
    gradient: "from-indigo-500 to-indigo-600",
    spent: 842.50,
    budget: 1000,
  },
  {
    id: "transport",
    name: "Transportation",
    icon: "car",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-purple-600",
    spent: 320.00,
    budget: 500,
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: "shopping-bag",
    color: "#06B6D4",
    gradient: "from-cyan-500 to-cyan-600",
    spent: 1245.75,
    budget: 800,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "film",
    color: "#10B981",
    gradient: "from-emerald-500 to-emerald-600",
    spent: 185.00,
    budget: 300,
  },
  {
    id: "utilities",
    name: "Utilities",
    icon: "zap",
    color: "#F59E0B",
    gradient: "from-amber-500 to-amber-600",
    spent: 450.00,
    budget: 600,
  },
  {
    id: "health",
    name: "Health & Fitness",
    icon: "heart",
    color: "#EF4444",
    gradient: "from-red-500 to-red-600",
    spent: 220.00,
    budget: 400,
  },
]

export const transactions: Transaction[] = [
  {
    id: "1",
    merchant: "Whole Foods Market",
    category: "Food & Dining",
    amount: -87.32,
    date: "2024-01-15",
    icon: "utensils",
  },
  {
    id: "2",
    merchant: "Uber",
    category: "Transportation",
    amount: -24.50,
    date: "2024-01-15",
    icon: "car",
  },
  {
    id: "3",
    merchant: "Netflix",
    category: "Entertainment",
    amount: -15.99,
    date: "2024-01-14",
    icon: "film",
  },
  {
    id: "4",
    merchant: "Amazon",
    category: "Shopping",
    amount: -142.67,
    date: "2024-01-14",
    icon: "shopping-bag",
  },
  {
    id: "5",
    merchant: "Salary Deposit",
    category: "Income",
    amount: 5420.00,
    date: "2024-01-13",
    icon: "trending-up",
  },
  {
    id: "6",
    merchant: "Electric Company",
    category: "Utilities",
    amount: -125.00,
    date: "2024-01-12",
    icon: "zap",
  },
  {
    id: "7",
    merchant: "Gym Membership",
    category: "Health & Fitness",
    amount: -89.99,
    date: "2024-01-11",
    icon: "heart",
  },
  {
    id: "8",
    merchant: "Starbucks",
    category: "Food & Dining",
    amount: -6.75,
    date: "2024-01-11",
    icon: "utensils",
  },
]

export const getChartData = () => {
  return categories.map(cat => ({
    category: cat.name,
    amount: cat.spent,
    fill: cat.color,
  }))
}

export const getTotalBalance = () => {
  return 24586.42
}

export const getMonthlyChange = () => {
  return { value: 12.5, trend: "up" as const }
}

export const getThisMonthSpending = () => {
  return categories.reduce((acc, cat) => acc + cat.spent, 0)
}

export const getLastMonthSpending = () => {
  return 2890.50
}

export const getTopCategory = () => {
  const sorted = [...categories].sort((a, b) => b.spent - a.spent)
  return sorted[0]
}
