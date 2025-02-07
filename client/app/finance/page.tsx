import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { WalletCards, Plane, Home, Plus } from "lucide-react"
import {  ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react"
import Link from "next/link"

export default function FinancePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Finance Overview</h1>
          <p className="text-muted-foreground">Track your income, expenses and investments</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <QuickActionCard
          title="Monthly Income"
          description="Track your earnings"
          icon={ArrowUpRight}
          href="/finance/income"
          stats={[
            { label: "This Month", value: "$5,240" },
            { label: "Last Month", value: "$4,890" }
          ]}
        />

        <QuickActionCard
          title="Monthly Expenses" 
          description="Monitor your spending"
          icon={ArrowDownRight}
          href="/finance/expenses"
          stats={[
            { label: "This Month", value: "$3,150" },
            { label: "Last Month", value: "$2,940" }
          ]}
        />

        <QuickActionCard
          title="Net Worth"
          description="Your total assets"
          icon={DollarSign}
          href="/finance/net-worth"
          stats={[
            { label: "Total Assets", value: "$42,500" },
            { label: "Total Debt", value: "$12,300" }
          ]}
        />
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          {/* Transaction list would go here */}
          <p className="text-sm text-muted-foreground">No recent transactions</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Spending Categories</h3>
          {/* Spending categories chart would go here */}
          <p className="text-sm text-muted-foreground">No spending data available</p>
        </Card>
      </section>
    </div>
  )
}
function QuickActionCard({ 
    title, 
    description, 
    icon: Icon, 
    href,
    stats 
  }: {
    title: string
    description: string
    icon: any
    href: string
    stats: { label: string; value: string }[]
  }) {
    return (
      <Link href={href}>
      <Card className="p-6 transition-all hover:shadow-neomorphic">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </Card>
      </Link>
    )
  }