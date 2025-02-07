"use client";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import { getAIRecommendations, bookTrip } from '@/app/services/tripService'
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

interface Trip {
    id: number
    destination: string
    description: string
    hotels: Hotel[]
}

interface Hotel {
    id: number
    name: string
    description: string
    price: number
    rating: number
    imageUrl: string
}

export default function TripPage() {
  const [view, setView] = useState<'history' | 'plan'>('history')
  const [recommendations, setRecommendations] = useState<Trip[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)
  const [showHotels, setShowHotels] = useState(false)
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  // Calculate days when dates change
  const days = date.from && date.to 
    ? Math.ceil(Math.abs(date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const [budget, setBudget] = useState('');

  const handlePlanTrip = async () => {
    if (!destination || !days || !budget) {
      alert('Please fill in all fields')
      return
    }
    setLoading(true)
    try {
      const data = await getAIRecommendations(
        destination, 
        days,
        parseFloat(budget)
      )
      setRecommendations(data)
      setLoading(false)
    } catch (error) {
      alert('Error getting recommendations')
      setLoading(false)
    }
  }

  const handleViewHotels = (trip: Trip) => {
    setSelectedTrip(trip)
    setShowHotels(true)
  }

  const handleBookHotel = async (hotelId: number) => {
    try {
      const result = await bookTrip(hotelId)
      if (result.success) {
        alert('Hotel booked successfully!')
        setShowHotels(false)
      } else {
        alert('Failed to book the hotel.')
      }
    } catch (error) {
      alert('An error occurred while booking the hotel.')
    }
  }

  return (
    <div className="bg-gradient-to-b from-blue-100 via-green-100/90 to-blue-200/95">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 p-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gray-900">Travel Planner</h1>
            <p className="text-gray-600 text-lg">
              Plan your next adventure or view your travel history
            </p>
          </div>

          <div className="flex gap-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-200">
            <Button 
              variant={view === 'history' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setView('history')}
              className={`w-40 transition-all duration-200 ease-in-out ${
                view === 'history' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                  : 'bg-transparent text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-blue-300'
              }`}
            >
              Trip History
            </Button>
            <Button 
              variant={view === 'plan' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setView('plan')}
              className={`w-40 transition-all duration-200 ease-in-out ${
                view === 'plan' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                  : 'bg-transparent text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-blue-300'
              }`}
            >
              Plan New Trip
            </Button>
          </div>

          {view === 'plan' && (
            <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-gray-900">Plan Your Trip</h2>
                <p className="text-gray-600">Enter your travel details below</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Destination</label>
                  <Input
                    placeholder="e.g., Paris, France"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="h-12 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Trip Dates</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 justify-start text-left font-normal bg-white border-gray-300 hover:bg-gray-50"
                      >
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "PPP")} - {format(date.to, "PPP")}
                            </>
                          ) : (
                            format(date.from, "PPP")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(range) => {
                          if (range) {
                            setDate({ from: range.from, to: range.to });
                          } else {
                            setDate({ from: undefined, to: undefined });
                          }
                        }}
                        numberOfMonths={2}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  {days > 0 && (
                    <p className="text-sm text-gray-600">
                      Selected duration: {days} day{days > 1 ? 's' : ''}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Total Trip Budget ($)</label>
                  <Input
                    type="number"
                    min="1"
                    placeholder="e.g., 2000"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="h-12 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                  />
                  <p className="text-sm text-gray-600">
                    Enter your total budget for the entire trip in USD
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  onClick={handlePlanTrip} 
                  disabled={loading}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 group"
                >
                  Find Hotels & Recommendations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                <p className="text-gray-600 text-lg">Finding the perfect options within your budget...</p>
              </div>
            </div>
          ) : showHotels && selectedTrip ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowHotels(false)}
                  className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                >
                  ← Back to Trips
                </Button>
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900">
                    Hotels in {selectedTrip.destination}
                  </h2>
                  <p className="text-gray-600">
                    Showing hotels for your {days}-day trip (Total budget: ${budget})
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedTrip.hotels
                  .filter(hotel => !budget || hotel.price * days <= parseFloat(budget))
                  .map((hotel) => (
                  <Card key={hotel.id} className="flex flex-col overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200">
                    {hotel.imageUrl && (
                      <div className="relative h-48 w-full">
                        <img
                          src={hotel.imageUrl}
                          alt={hotel.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {hotel.price * days <= parseFloat(budget) && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                            Within Budget
                          </div>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <div className="space-y-1">
                        <h3 className="text-2xl font-semibold text-gray-900">{hotel.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-500">
                            {Array.from({ length: Math.floor(hotel.rating) }).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                          <span className="text-gray-600">({hotel.rating}/5)</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 line-clamp-3">{hotel.description}</p>
                      <div className="mt-4">
                        <p className="text-lg font-semibold text-gray-900">${hotel.price} per night</p>
                        <p className="text-sm text-gray-600">
                          Total: ${hotel.price * days} for {days} nights
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        size="lg"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 group"
                        onClick={() => handleBookHotel(hotel.id)}
                      >
                        Book Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ) : recommendations.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">
                {view === 'history' ? 'Your Past Trips' : 'Recommended Destinations'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((trip) => (
                  <Card key={trip.id} className="flex flex-col bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200">
                    <CardHeader>
                      <h3 className="text-2xl font-semibold text-gray-900">{trip.destination}</h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 mb-4">{trip.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{trip.hotels?.length || 0}</span>
                        <span className="text-gray-600">hotels available</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        size="lg"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 group"
                        onClick={() => handleViewHotels(trip)}
                      >
                        View Hotels
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ) : view === 'history' ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
              <p className="text-xl text-gray-600">No past trips found</p>
              <Button 
                size="lg" 
                onClick={() => setView('plan')}
                className="bg-blue-600 text-white hover:bg-blue-700 group"
              >
                Plan Your First Trip
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
