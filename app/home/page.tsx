import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="h-full">
      <div className="container mx-auto p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to Smart Home Control
          </h1>
          <p className="text-xl text-gray-600">
            Your complete solution for home automation and monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <h2 className="text-3xl font-semibold mb-6">Lighting Control</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Manage all your smart lights, set schedules and create ambiance
            </p>
            <Link href="/lighting">
              <Button className="w-full text-lg py-6">
                Control Lights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <h2 className="text-3xl font-semibold mb-6">Climate Control</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Adjust AC temperature, fan speeds and monitor energy usage
            </p>
            <Link href="/climate">
              <Button className="w-full text-lg py-6">
                Manage Climate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <h2 className="text-3xl font-semibold mb-6">Security Cameras</h2>
            <p className="text-gray-600 mb-8 text-lg">
              View live feeds and recordings from your security cameras
            </p>
            <Link href="/security">
              <Button className="w-full text-lg py-6">
                View Cameras
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
