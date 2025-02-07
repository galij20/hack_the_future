"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Thermometer, Clock, Power, Fan } from "lucide-react";

type Room = {
  name: string;
  temperature: number;
  power: boolean;
  fanSpeed: number;
  location: string;
};

export default function ClimatePage() {
  const [selectedRoom, setSelectedRoom] = useState("living-room");

  const [rooms, setRooms] = useState<Record<string, Room>>({
    "living-room": {
      name: "Living Room",
      temperature: 22,
      power: true,
      fanSpeed: 2,
      location: "Living Room",
    },
    "bedroom": {
      name: "Bedroom", 
      temperature: 20,
      power: true,
      fanSpeed: 1,
      location: "Bedroom",
    },
    "kitchen": {
      name: "Kitchen",
      temperature: 23,
      power: true,
      fanSpeed: 2,
      location: "Kitchen",
    },
    "guest-room": {
      name: "Guest Room",
      temperature: 21,
      power: false,
      fanSpeed: 1,
      location: "Guest Room",
    },
  });

  const togglePower = () => {
    setRooms((prev) => ({
      ...prev,
      [selectedRoom]: {
        ...prev[selectedRoom],
        power: !prev[selectedRoom].power,
      },
    }));
  };

  const updateTemperature = (newTemp: number) => {
    setRooms((prev) => ({
      ...prev,
      [selectedRoom]: {
        ...prev[selectedRoom],
        temperature: newTemp,
      },
    }));
  };

  const updateFanSpeed = (newSpeed: number) => {
    setRooms((prev) => ({
      ...prev,
      [selectedRoom]: {
        ...prev[selectedRoom],
        fanSpeed: newSpeed,
      },
    }));
  };

  return (
    <div className="space-y-8">
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Climate Control</h1>
            <p className="text-xl text-gray-600">Manage your home&apos;s temperature and AC settings</p>
          </div>

          {/* Room Selection */}
          <div className="mb-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Select Room</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(rooms).map(([id, room]) => (
                  <Button
                    key={id}
                    variant={selectedRoom === id ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setSelectedRoom(id)}
                  >
                    <Thermometer className={`h-4 w-4 mr-2 ${room.power ? "text-blue-400" : ""}`} />
                    {room.name}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Power Control */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Power className="h-6 w-6 mr-2" />
                <h2 className="text-2xl font-semibold">Power Control</h2>
              </div>
              <p className="text-gray-600 mb-6">Control AC for {rooms[selectedRoom].name}</p>
              <Button className="w-full" variant={rooms[selectedRoom].power ? "default" : "outline"} onClick={togglePower}>
                {rooms[selectedRoom].power ? "Turn Off" : "Turn On"}
              </Button>
            </Card>

            {/* Temperature Control */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Thermometer className="h-6 w-6 mr-2" />
                <h2 className="text-2xl font-semibold">Temperature</h2>
              </div>
              <p className="text-gray-600 mb-6">Set temperature for {rooms[selectedRoom].name}</p>
              <div className="space-y-4">
                <input
                  type="range"
                  min="16"
                  max="30"
                  className="w-full"
                  value={rooms[selectedRoom].temperature}
                  onChange={(e) => updateTemperature(Number(e.target.value))}
                />
                <p className="text-sm text-center text-gray-600">Temperature: {rooms[selectedRoom].temperature}°C</p>
              </div>
            </Card>

            {/* Fan Speed Control */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Fan className="h-6 w-6 mr-2" />
                <h2 className="text-2xl font-semibold">Fan Speed</h2>
              </div>
              <p className="text-gray-600 mb-6">Adjust fan speed for {rooms[selectedRoom].name}</p>
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  className={`w-full ${rooms[selectedRoom].fanSpeed === 1 ? 'bg-blue-500' : ''}`}
                  onClick={() => updateFanSpeed(1)}
                >
                  Low
                </Button>
                <Button 
                  className={`w-full ${rooms[selectedRoom].fanSpeed === 2 ? 'bg-blue-500' : ''}`}
                  onClick={() => updateFanSpeed(2)}
                >
                  Medium
                </Button>
                <Button 
                  className={`w-full ${rooms[selectedRoom].fanSpeed === 3 ? 'bg-blue-500' : ''}`}
                  onClick={() => updateFanSpeed(3)}
                >
                  High
                </Button>
              </div>
            </Card>
          </div>

          {/* Scheduling */}
          <div className="mt-16">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Schedule Settings</h3>
              <p className="text-gray-600 mb-6">Set temperature schedules for {rooms[selectedRoom].name}</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Night Mode (22°C)</span>
                  </div>
                  <Button variant="outline">Edit Schedule</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Day Mode (24°C)</span>
                  </div>
                  <Button variant="outline">Edit Schedule</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Energy Saver (26°C)</span>
                  </div>
                  <Button variant="outline">Edit Schedule</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
