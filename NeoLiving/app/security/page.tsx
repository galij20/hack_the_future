"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Video, Shield, Bell } from "lucide-react";

type Camera = {
  name: string;
  isRecording: boolean;
  isOnline: boolean;
  location: string;
  lastMotion: string;
};

export default function SecurityPage() {
  const [selectedCamera, setSelectedCamera] = useState("gate");

  const [cameras, setCameras] = useState<Record<string, Camera>>({
    "gate": {
      name: "Gate Camera",
      isRecording: true,
      isOnline: true,
      location: "Main Gate",
      lastMotion: "2 mins ago"
    },
    "hall": {
      name: "Hall Camera",
      isRecording: true,
      isOnline: true,
      location: "Main Hall",
      lastMotion: "5 mins ago"
    },
    "stairway": {
      name: "Stairway Camera",
      isRecording: true,
      isOnline: true,
      location: "Main Stairway",
      lastMotion: "15 mins ago"
    }
  });

  const toggleRecording = () => {
    setCameras((prev) => ({
      ...prev,
      [selectedCamera]: {
        ...prev[selectedCamera],
        isRecording: !prev[selectedCamera].isRecording,
      },
    }));
  };

  return (
    <div className="space-y-8">
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Cameras</h1>
            <p className="text-xl text-gray-600">Monitor your home security cameras</p>
          </div>

          {/* Camera Selection */}
          <div className="mb-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Select Camera</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(cameras).map(([id, camera]) => (
                  <Button
                    key={id}
                    variant={selectedCamera === id ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setSelectedCamera(id)}
                  >
                    <Camera className={`h-4 w-4 mr-2 ${camera.isOnline ? "text-green-400" : "text-red-400"}`} />
                    {camera.name}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Camera Feed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Camera View */}
            <Card className="md:col-span-2 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Video className="h-6 w-6 mr-2" />
                  <h2 className="text-2xl font-semibold">Live Feed</h2>
                </div>
                <div className="flex items-center">
                  <span className={`h-3 w-3 rounded-full ${cameras[selectedCamera].isOnline ? "bg-green-500" : "bg-red-500"} mr-2`}></span>
                  <span className="text-sm">{cameras[selectedCamera].isOnline ? "Online" : "Offline"}</span>
                </div>
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-white">Live Feed from {cameras[selectedCamera].name}</p>
              </div>
            </Card>

            {/* Camera Controls */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 mr-2" />
                <h2 className="text-2xl font-semibold">Controls</h2>
              </div>
              <div className="space-y-4">
                <Button 
                  className="w-full" 
                  variant={cameras[selectedCamera].isRecording ? "default" : "outline"}
                  onClick={toggleRecording}
                >
                  {cameras[selectedCamera].isRecording ? "Stop Recording" : "Start Recording"}
                </Button>
                <Button className="w-full" variant="outline">Take Snapshot</Button>
                <Button className="w-full" variant="outline">Download Footage</Button>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Camera Info</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Location: {cameras[selectedCamera].location}</p>
                  <p>Last Motion Detected: {cameras[selectedCamera].lastMotion}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Bell className="h-6 w-6 mr-2" />
                <h3 className="text-2xl font-semibold">Recent Activity</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded">
                  <span>Motion detected at Gate Camera</span>
                  <span className="text-sm text-gray-500">2 mins ago</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <span>Recording started on Hall Camera</span>
                  <span className="text-sm text-gray-500">15 mins ago</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <span>Motion detected at Stairway Camera</span>
                  <span className="text-sm text-gray-500">25 mins ago</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
