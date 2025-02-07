import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Smart Home Control
          </h1>
          <p className="text-xl text-gray-600">
            Your complete solution for home automation and monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Lighting Control</h2>
            <p className="text-gray-600 mb-6">
              Manage all your smart lights, set schedules and create ambiance
            </p>
            <Link href="/lighting">
              <Button className="w-full">
                Control Lights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Climate Control</h2>
            <p className="text-gray-600 mb-6">
              Adjust AC temperature, fan speeds and monitor energy usage
            </p>
            <Link href="/climate">
              <Button className="w-full">
                Manage Climate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Security Cameras</h2>
            <p className="text-gray-600 mb-6">
              View live feeds and recordings from your security cameras
            </p>
            <Link href="/security">
              <Button className="w-full">
                View Cameras
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        
      </div>
    </div>
  )
}
