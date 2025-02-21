// app/alerts/page.tsx
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  AlertTriangle,
  Clock,
  Pill,
  CalendarClock,
  PackageOpen,
  XCircle,
  CheckCircle
} from "lucide-react";

export default function AlertsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
          <p className="text-muted-foreground mt-2">
            Stay updated with your medication alerts and reminders
          </p>
        </div>
        <Button variant="outline">
          <Bell className="mr-2 h-4 w-4" />
          Mark All as Read
        </Button>
      </div>

      {/* Alert Summary */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Urgent Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">3</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Reminders</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">5</div>
            <p className="text-xs text-muted-foreground">Scheduled for today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Refills</CardTitle>
            <PackageOpen className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">2</div>
            <p className="text-xs text-muted-foreground">Due in next 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Missed Dose Alert */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-500 mt-1" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-red-500">Missed Dose</h4>
                  <Badge variant="outline" className="text-red-500 border-red-500">Urgent</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Evening dose of Medication A was missed</p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Take Now</Button>
          </div>

          {/* Upcoming Dose Reminder */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-blue-500">Upcoming Dose</h4>
                  <Badge variant="outline" className="text-blue-500 border-blue-500">Reminder</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Time for your afternoon medication</p>
                <p className="text-xs text-muted-foreground mt-1">Due in 30 minutes</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Mark as Taken</Button>
          </div>

          {/* Refill Alert */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-start gap-3">
              <PackageOpen className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-yellow-500">Low Supply</h4>
                  <Badge variant="outline" className="text-yellow-500 border-yellow-500">Refill Soon</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Medication B is running low (5 doses remaining)</p>
                <p className="text-xs text-muted-foreground mt-1">Refill needed within 5 days</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Order Refill</Button>
          </div>

          {/* Doctor Appointment */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-start gap-3">
              <CalendarClock className="h-5 w-5 text-purple-500 mt-1" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-purple-500">Appointment</h4>
                  <Badge variant="outline" className="text-purple-500 border-purple-500">Upcoming</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Doctor's appointment for prescription review</p>
                <p className="text-xs text-muted-foreground mt-1">Friday, 10:00 AM</p>
              </div>
            </div>
            <Button variant="outline" size="sm">View Details</Button>
          </div>

          {/* Completed Alert */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-green-500">Dose Taken</h4>
                  <Badge variant="outline" className="text-green-500 border-green-500">Completed</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Morning dose of Medication C taken successfully</p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}