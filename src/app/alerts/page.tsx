import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    type: "Critical",
    message: "Missed morning medication",
    details: "You missed your morning dose. Consider taking it now if safe.",
    icon: <AlertTriangle className="text-red-500" />,
  },
  {
    id: 2,
    type: "Warning",
    message: "Low supply alert",
    details: "Medication A needs a refill within 5 days.",
    icon: <Bell className="text-yellow-500" />,
  },
  {
    id: 3,
    type: "Info",
    message: "Doctor Appointment",
    details: "Upcoming review on Friday, 10:00 AM.",
    icon: <CheckCircle className="text-blue-500" />,
  },
];

export default function AlertsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Alerts</h1>
      <p className="text-gray-500">Stay updated with your medication and health-related alerts.</p>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="border shadow-sm">
            <CardHeader className="flex flex-row items-center gap-3">
              {alert.icon}
              <CardTitle>{alert.message}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 flex justify-between">
              <span>{alert.details}</span>
              <Button variant="outline" size="sm">
                Mark as Read
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
