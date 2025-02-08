"use client"

import { HomeIcon, WalletCards, Plane, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/finance", icon: WalletCards, label: "Finance" },
    { href: "/trip", icon: Plane, label: "Trip" },
    { href: "/home", icon: Home, label: "Home Ass." },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6" />
            <span className="font-bold">NeoLiving</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-center md:justify-end">
          <nav className="flex items-center space-x-6">
            {links.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  )
}