"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Sun, Moon, Power, Palette } from "lucide-react";

type LightBulb = {
  name: string;
  brightness: number;
  power: boolean;
  location: string;
};

export default function LightingPage() {
  const [selectedBulb, setSelectedBulb] = useState("living-room-main");

  // Store bulbs in state for proper updates
  const [lightBulbs, setLightBulbs] = useState<Record<string, LightBulb>>({
    "living-room-main": {
      name: "Living Room Main",
      brightness: 80,
      power: true,
      location: "Living Room",
    },
    "living-room-accent": {
      name: "Living Room Accent",
      brightness: 60,
      power: true,
      location: "Living Room",
    },
    "kitchen-ceiling": {
      name: "Kitchen Ceiling",
      brightness: 100,
      power: true,
      location: "Kitchen",
    },
    "bedroom-main": {
      name: "Bedroom Main",
      brightness: 50,
      power: false,
      location: "Bedroom",
    },
    "bedroom-lamp": {
      name: "Bedroom Lamp",
      brightness: 30,
      power: true,
      location: "Bedroom",
    },
  });

  // Function to toggle power
  const togglePower = () => {
    setLightBulbs((prev) => ({
      ...prev,
      [selectedBulb]: {
        ...prev[selectedBulb],
        power: !prev[selectedBulb].power,
      },
    }));
  };

  // Function to update brightness
  const updateBrightness = (newBrightness: number) => {
    setLightBulbs((prev) => ({
      ...prev,
      [selectedBulb]: {
        ...prev[selectedBulb],
        brightness: newBrightness,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lighting Control</h1>
          <p className="text-xl text-gray-600">Manage your smart lighting system</p>
        </div>

        {/* Light Selection */}
        <div className="mb-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Select Light Bulb</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.entries(lightBulbs).map(([id, bulb]) => (
                <Button
                  key={id}
                  variant={selectedBulb === id ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedBulb(id)}
                >
                  <Lightbulb className={`h-4 w-4 mr-2 ${bulb.power ? "text-yellow-400" : ""}`} />
                  {bulb.name}
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
            <p className="text-gray-600 mb-6">Control power for {lightBulbs[selectedBulb].name}</p>
            <Button className="w-full" variant={lightBulbs[selectedBulb].power ? "default" : "outline"} onClick={togglePower}>
              {lightBulbs[selectedBulb].power ? "Turn Off" : "Turn On"}
            </Button>
          </Card>

          {/* Brightness Control */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Sun className="h-6 w-6 mr-2" />
              <h2 className="text-2xl font-semibold">Brightness</h2>
            </div>
            <p className="text-gray-600 mb-6">Adjust brightness for {lightBulbs[selectedBulb].name}</p>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
                value={lightBulbs[selectedBulb].brightness}
                onChange={(e) => updateBrightness(Number(e.target.value))}
              />
              <p className="text-sm text-center text-gray-600">Brightness: {lightBulbs[selectedBulb].brightness}%</p>
            </div>
          </Card>

          {/* Color & Mood */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Palette className="h-6 w-6 mr-2" />
              <h2 className="text-2xl font-semibold">Color & Mood</h2>
            </div>
            <p className="text-gray-600 mb-6">Change colors for {lightBulbs[selectedBulb].name}</p>
            <div className="grid grid-cols-3 gap-2">
              <Button className="w-full bg-red-500 hover:bg-red-600">Warm</Button>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Cool</Button>
              <Button className="w-full bg-purple-500 hover:bg-purple-600">Night</Button>
            </div>
          </Card>
        </div>

        {/* Scheduling */}
        <div className="mt-16">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Scheduling</h3>
            <p className="text-gray-600 mb-6">Set automated schedules for {lightBulbs[selectedBulb].name}</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center">
                  <Moon className="h-5 w-5 mr-2" />
                  <span>Night Mode</span>
                </div>
                <Button variant="outline">Edit Schedule</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center">
                  <Sun className="h-5 w-5 mr-2" />
                  <span>Morning Routine</span>
                </div>
                <Button variant="outline">Edit Schedule</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
