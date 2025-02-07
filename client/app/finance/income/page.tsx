import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function IncomePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Income Overview</h1>
          <p className="text-muted-foreground">Track and manage your income sources</p>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="rounded-full bg-primary/10 p-3">
            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Total Income</h3>
            <p className="text-sm text-muted-foreground">This month: $5,240</p>
          </div>
        </div>
        {/* Add income sources list or form here */}
      </Card>
    </div>
  )
}

