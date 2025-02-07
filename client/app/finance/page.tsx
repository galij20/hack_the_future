'use client'
import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { useState } from "react"

export default function FinancePage() {
  const [isExpanded, setIsExpanded] = useState(false)

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
                <div className="h-40 bg-green-50 rounded-lg transition-transform duration-300 hover:scale-105">
                  Income Trend Chart
                </div>
                <div className="h-40 bg-green-50 rounded-lg transition-transform duration-300 hover:scale-105">
                  Income Sources Breakdown
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
                <div className="h-40 bg-blue-50 rounded-lg transition-transform duration-300 hover:scale-105">
                  Expenses Trend Chart
                </div>
                <div className="h-40 bg-blue-50 rounded-lg transition-transform duration-300 hover:scale-105">
                  Spending Categories Breakdown
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">No recent transactions</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Spending Categories</h3>
          <p className="text-sm text-muted-foreground">No spending data available</p>
        </Card>
      </section>
    </div>
  )
}
