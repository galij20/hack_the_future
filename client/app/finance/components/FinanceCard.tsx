import { Card } from "@/components/ui/card"
import { ReactNode } from "react"

interface FinanceCardProps {
  title: string
  description: string
  icon: any
  children: ReactNode
}

export function FinanceCard({ 
  title, 
  description, 
  icon: Icon,
  children 
}: FinanceCardProps) {
  return (
    <Card className="p-6 hover:bg-accent/50 transition-colors cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      {children}
    </Card>
  )
} 
