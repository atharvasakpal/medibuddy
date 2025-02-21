// app/history/page.tsx
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Download,
  Clock,
  CheckCircle2,
  XCircle,
  Filter,
  BarChart3
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HistoryPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Medication History</h1>
          <p className="text-muted-foreground mt-2">
            Track your medication adherence and history
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Doses</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">228</div>
            <p className="text-xs text-muted-foreground">92% adherence rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Missed</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">20</div>
            <p className="text-xs text-muted-foreground">8% missed rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Medicines</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">8</div>
            <p className="text-xs text-muted-foreground">Current prescriptions</p>
          </CardContent>
        </Card>
      </div>

      {/* History Log */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Medication Log</CardTitle>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Medicine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Medicines</SelectItem>
                <SelectItem value="med1">Medicine A</SelectItem>
                <SelectItem value="med2">Medicine B</SelectItem>
                <SelectItem value="med3">Medicine C</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="30">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Today */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Today</h3>
              <div className="space-y-2">
                <HistoryItem 
                  status="completed"
                  medicine="Medicine A"
                  time="9:00 AM"
                  details="Morning dose - 500mg"
                />
                <HistoryItem 
                  status="completed"
                  medicine="Medicine B"
                  time="2:00 PM"
                  details="Afternoon dose - 250mg"
                />
                <HistoryItem 
                  status="missed"
                  medicine="Medicine C"
                  time="8:00 PM"
                  details="Evening dose - 300mg"
                />
              </div>
            </div>

            {/* Yesterday */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Yesterday</h3>
              <div className="space-y-2">
                <HistoryItem 
                  status="completed"
                  medicine="Medicine A"
                  time="9:00 AM"
                  details="Morning dose - 500mg"
                />
                <HistoryItem 
                  status="delayed"
                  medicine="Medicine B"
                  time="2:00 PM"
                  details="Afternoon dose - 250mg"
                  delay="Taken 1 hour late"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// History Item Component
function HistoryItem({ status, medicine, time, details, delay }: {
  status: 'completed' | 'missed' | 'delayed';
  medicine: string;
  time: string;
  details: string;
  delay?: string;
}) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg
      ${status === 'completed' ? 'bg-green-500/10' : 
        status === 'missed' ? 'bg-red-500/10' : 
        'bg-yellow-500/10'}`}>
      <div className="flex items-center gap-3">
        {status === 'completed' ? (
          <CheckCircle2 className="h-5 w-5 text-green-500" />
        ) : status === 'missed' ? (
          <XCircle className="h-5 w-5 text-red-500" />
        ) : (
          <Clock className="h-5 w-5 text-yellow-500" />
        )}
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-medium">{medicine}</h4>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{time}</span>
          </div>
          <p className="text-sm text-muted-foreground">{details}</p>
          {delay && <p className="text-xs text-yellow-500 mt-1">{delay}</p>}
        </div>
      </div>
    </div>
  );
}