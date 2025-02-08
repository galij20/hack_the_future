import { Card } from "@/components/ui/card"
import { ArrowDownRight } from "lucide-react"

export default function ExpensesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Expenses Overview</h1>
          <p className="text-muted-foreground">Track and categorize your expenses</p>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="rounded-full bg-primary/10 p-3">
            <ArrowDownRight className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Total Expenses</h3>
            <p className="text-sm text-muted-foreground">This month: $3,150</p>
          </div>
        </div>
        {/* Add expenses list or form here */}
      </Card>
    </div>
  )
} 