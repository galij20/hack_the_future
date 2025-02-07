import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WalletCards, Plane, Home, Plus } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome back, User</h1>
        <p className="text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </section>

      
      <section className="grid gap-4 md:grid-cols-3">
        <QuickActionCard
          title="Finance Companion"
          description="Track your expenses and manage your budget"
          icon={WalletCards}
          href="/finance"
          stats={[
            { label: "Monthly Savings", value: "$2,450" },
            { label: "Budget Status", value: "On Track" }
          ]}
        />
        <QuickActionCard
          title="Trip Companion"
          description="Plan and manage your upcoming travels"
          icon={Plane}
          href="/trip"
          stats={[
            { label: "Next Trip", value: "Paris" },
            { label: "In", value: "15 days" }
          ]}
        />
        <QuickActionCard
          title="Home Assistant"
          description="Control your smart home devices"
          icon={Home}
          href="/home"
          stats={[
            { label: "Energy Usage", value: "12.5 kWh" },
            { label: "Temperature", value: "72°F" }
          ]}
        />
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <Button className="w-full shadow-neomorphic" variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
        <Button className="w-full shadow-neomorphic" variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Plan Trip
        </Button>
        <Button className="w-full shadow-neomorphic" variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Add Device
        </Button>
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

