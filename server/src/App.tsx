import React from 'react';
import { CreditCard, PieChart, Wallet, ArrowUpRight, DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Wallet className="w-8 h-8 text-emerald-400" />
          <h1 className="text-2xl font-bold">Finance Companion</h1>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <CreditCard className="w-4 h-4" />
          Add Transaction
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Balance Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-400">Total Balance</h2>
            <DollarSign className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">$24,562</span>
            <span className="text-emerald-400 flex items-center text-sm">
              <TrendingUp className="w-4 h-4" />
              +2.5%
            </span>
          </div>
        </div>

        {/* Monthly Expenses Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-400">Monthly Expenses</h2>
            <TrendingDown className="w-5 h-5 text-rose-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">$3,248</span>
            <span className="text-rose-400 flex items-center text-sm">
              <TrendingDown className="w-4 h-4" />
              -4.3%
            </span>
          </div>
        </div>

        {/* Savings Goal Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-400">Savings Goal</h2>
            <ArrowUpRight className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">$12,000</span>
            <span className="text-blue-400 text-sm">/ $15,000</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="md:col-span-2 lg:col-span-2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { name: 'Grocery Shopping', amount: -82.50, category: 'Shopping', date: 'Today' },
              { name: 'Salary Deposit', amount: 4800.00, category: 'Income', date: 'Yesterday' },
              { name: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', date: '2 days ago' },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    transaction.amount > 0 ? 'bg-emerald-400/20 text-emerald-400' : 'bg-rose-400/20 text-rose-400'
                  }`}>
                    {transaction.amount > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-medium">{transaction.name}</h3>
                    <p className="text-sm text-gray-400">{transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.amount > 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Analysis */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Spending Categories</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { category: 'Shopping', percentage: 35, amount: 1137.50 },
              { category: 'Bills', percentage: 25, amount: 812.50 },
              { category: 'Entertainment', percentage: 20, amount: 650.00 },
              { category: 'Others', percentage: 20, amount: 650.00 },
            ].map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{category.category}</span>
                  <span>${category.amount.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-emerald-400 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;