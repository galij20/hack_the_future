"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  ChartBar, 
  BarChart2, 
  ChevronLeft, 
  ChevronRight,
  WalletCards,
  Plane,
  Home as HomeIcon,
  Plus,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Reset login state
    localStorage.removeItem('isLoggedIn');
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      router.push('/dashboard');
    }
    setIsLoading(false);
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple credential check (in real app, this would be an API call)
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  // Don't render anything until after mounting to prevent hydration issues
  if (!mounted) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter password"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Use username: "admin" and password: "password"
        </p>
      </div>
    </div>
  );
}

type Event = {
  title: string;
  time: string;
  location: string;
}

type Events = {
  [date: string]: Event[];
}

export function Dashboard() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showEventSidebar, setShowEventSidebar] = useState(false)

  // Update events with type
  const events: Events = {
    "2024-01-15": [
      { title: "Team Meeting", time: "2:00 PM", location: "Virtual Conference Room" },
      { title: "Project Review", time: "4:00 PM", location: "Meeting Room 2A" }
    ],
    "2024-01-20": [
      { title: "Client Presentation", time: "3:30 PM", location: "Main Conference Room" }
    ]
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = []
    
    // Add empty slots for days before the first of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysInMonth.push(null)
    }
    
    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push(new Date(year, month, i))
    }

    // Add empty slots for days after the last of the month to complete grid
    const remainingSlots = 35 - daysInMonth.length // 5 rows * 7 days
    for (let i = 0; i < remainingSlots; i++) {
      daysInMonth.push(null)
    }
    
    return daysInMonth
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setShowEventSidebar(true)
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Welcome back, User
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:border-primary"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            <Button className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Analytics Overview</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:col-span-2"
          >
            <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <ChartBar className="h-10 w-10 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold">Total Savings</h3>
              <p className="text-4xl font-bold mt-4 mb-4">$12,450</p>
              <div className="flex items-center mt-4 bg-green-200/50 dark:bg-green-800/30 p-3 rounded-lg">
                <BarChart2 className="h-5 w-5 text-green-600 mr-3" />
                <p className="text-base text-green-600">↑ 12% from last month</p>
              </div>
            </Card>
          </motion.div>

          <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-semibold ml-2">Calendar</h3>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                  className="h-6 w-6 p-0 hover:bg-blue-100 dark:hover:bg-blue-800/20"
                >
                  <ChevronLeft className="h-3 w-3" />
                </Button>
                <span className="text-xs font-medium px-2">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                  className="h-6 w-6 p-0 hover:bg-blue-100 dark:hover:bg-blue-800/20"
                >
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="text-[10px] font-medium text-muted-foreground">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentMonth).map((date, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: date ? 1.1 : 1 }}
                  whileTap={{ scale: date ? 0.95 : 1 }}
                  className={`
                    relative aspect-square flex items-center justify-center rounded-sm text-[10px]
                    ${date ? 'hover:bg-blue-100 dark:hover:bg-blue-800/20 cursor-pointer' : ''}
                    ${selectedDate && date?.toDateString() === selectedDate.toDateString() ? 'bg-blue-200 dark:bg-blue-800/40' : ''}
                  `}
                  onClick={() => date && handleDateClick(date)}
                >
                  {date?.getDate()}
                  {date && events[date.toISOString().split('T')[0]] && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute bottom-0.5 w-0.5 h-0.5 rounded-full bg-blue-600"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Event Sidebar */}
      <AnimatePresence>
        {showEventSidebar && selectedDate && events[selectedDate.toISOString().split('T')[0]] && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-80 sm:w-96 bg-white dark:bg-gray-900 shadow-2xl p-4 z-50"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                Events for {selectedDate.toLocaleDateString()}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEventSidebar(false)}
                className="h-8 w-8 p-0"
              >
                ×
              </Button>
            </div>
            <div className="space-y-3">
              {events[selectedDate.toISOString().split('T')[0]].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                >
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-blue-600 mt-1">{event.time}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{event.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="grid gap-6 md:grid-cols-3">
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
          icon={HomeIcon}
          href="/home"
          stats={[
            { label: "Energy Usage", value: "12.5 kWh" },
            { label: "Temperature", value: "72°F" }
          ]}
        />
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Quick Actions</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Button 
            className="group relative h-24 w-full bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 shadow-lg transition-all duration-300" 
            variant="outline"
          >
            <div className="flex items-center">
              <Plus className="mr-3 h-5 w-5 text-primary" />
              <span className="text-lg">Add Transaction</span>
            </div>
            <ArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Button>
          <Button 
            className="group relative h-24 w-full bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 shadow-lg transition-all duration-300" 
            variant="outline"
          >
            <div className="flex items-center">
              <Plus className="mr-3 h-5 w-5 text-primary" />
              <span className="text-lg">Plan Trip</span>
            </div>
            <ArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Button>
          <Button 
            className="group relative h-24 w-full bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 shadow-lg transition-all duration-300" 
            variant="outline"
          >
            <div className="flex items-center">
              <Plus className="mr-3 h-5 w-5 text-primary" />
              <span className="text-lg">Add Device</span>
            </div>
            <ArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </div>
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
    <Link href={href} className="block group">
      <Card className="p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/10">
        <div className="flex items-start space-x-6">
          <div className="rounded-2xl bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-primary/5 rounded-lg p-3 group-hover:bg-primary/10 transition-colors duration-300">
              <p className="text-sm font-medium text-primary">{stat.label}</p>
              <p className="text-lg font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </Card>
    </Link>
  )
}



