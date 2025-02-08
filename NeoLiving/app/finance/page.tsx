'use client'
import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, ShoppingBag, Home, Car, Utensils, Coffee } from "lucide-react"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function FinancePage() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Sample monthly trend data
  const monthlyTrendData = [
    { month: 'Jan', income: 4800, expenses: 2900 },
    { month: 'Feb', income: 5100, expenses: 3100 },
    { month: 'Mar', income: 4950, expenses: 2800 },
    { month: 'Apr', income: 5240, expenses: 3150 },
  ]

  // Sample spending categories data
  const spendingCategories = [
    { name: 'Housing', value: 1200, color: '#0ea5e9' },
    { name: 'Transportation', value: 450, color: '#6366f1' },
    { name: 'Food', value: 800, color: '#8b5cf6' },
    { name: 'Entertainment', value: 400, color: '#ec4899' },
    { name: 'Others', value: 300, color: '#f43f5e' },
  ]

  // Sample transactions
  const recentTransactions = [
    { id: 1, title: 'Grocery Shopping', amount: -120.50, date: '2024-03-20', category: 'Food', icon: ShoppingBag },
    { id: 2, title: 'Rent Payment', amount: -1200, date: '2024-03-19', category: 'Housing', icon: Home },
    { id: 3, title: 'Car Insurance', amount: -180, date: '2024-03-18', category: 'Transportation', icon: Car },
    { id: 4, title: 'Restaurant', amount: -45.80, date: '2024-03-17', category: 'Food', icon: Utensils },
    { id: 5, title: 'Coffee Shop', amount: -4.50, date: '2024-03-17', category: 'Food', icon: Coffee },
  ]

  // Sample data - replace with actual data fetching
  const incomeData = {
    currentMonth: 5240,
    lastMonth: 4890
  }

  const expensesData = {
    currentMonth: 3150,
    lastMonth: 2940
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Finance Overview</h1>
          <p className="text-muted-foreground">Track your income, expenses and investments</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div 
          role="button" 
          tabIndex={0}
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
        >
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 hover:bg-green-200/50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-green-100 p-3">
                <ArrowUpRight className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Monthly Income</h3>
                <p className="text-sm text-green-700">Track your earnings</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-green-700">This Month</p>
                <p className="font-semibold text-green-900">{formatCurrency(incomeData.currentMonth)}</p>
              </div>
              <div>
                <p className="text-sm text-green-700">Last Month</p>
                <p className="font-semibold text-green-900">{formatCurrency(incomeData.lastMonth)}</p>
              </div>
            </div>
            {isExpanded && (
              <div className="mt-6 space-y-4">
                <div className="h-40 bg-green-50 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="income" stroke="#16a34a" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>

        <div 
          role="button" 
          tabIndex={0}
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
        >
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 hover:bg-blue-200/50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-blue-100 p-3">
                <ArrowDownRight className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">Monthly Expenses</h3>
                <p className="text-sm text-blue-700">Monitor your spending</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-700">This Month</p>
                <p className="font-semibold text-blue-900">{formatCurrency(expensesData.currentMonth)}</p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Last Month</p>
                <p className="font-semibold text-blue-900">{formatCurrency(expensesData.lastMonth)}</p>
              </div>
            </div>
            {isExpanded && (
              <div className="mt-6 space-y-4">
                <div className="h-40 bg-blue-50 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="expenses" stroke="#16a34a" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => {
              const Icon = transaction.icon
              return (
                <div key={transaction.id} className="flex items-center justify-between p-2 hover:bg-accent/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.title}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <span className={transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                    {formatCurrency(transaction.amount)}
                  </span>
                </div>
              )
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Spending Categories</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingCategories}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {spendingCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {spendingCategories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                  <span className="text-sm">{category.name}</span>
                </div>
                <span className="text-sm font-medium">{formatCurrency(category.value)}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
