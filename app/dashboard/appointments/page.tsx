import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppointmentsTable } from "@/components/appointments-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AppointmentForm } from "@/components/appointment-form"

export default function AppointmentsPage() {
  // Dummy data for demonstration
  const appointments = [
    {
      id: "app1",
      patientName: "Alice Johnson",
      doctorName: "Dr. Emily White",
      type: "online",
      dateTime: "2025-07-15 10:00 AM",
      status: "booked",
      paymentStatus: "pending",
      meetingLink: "https://meet.google.com/abc-defg-hij", // Added meeting link
    },
    {
      id: "app2",
      patientName: "Bob Williams",
      doctorName: "Dr. John Smith",
      type: "offline",
      dateTime: "2025-07-16 02:30 PM",
      status: "completed",
      paymentStatus: "paid",
    },
    {
      id: "app3",
      patientName: "Charlie Brown",
      doctorName: "Dr. Sarah Lee",
      type: "online",
      dateTime: "2025-07-17 11:00 AM",
      status: "rescheduled",
      paymentStatus: "paid",
      meetingLink: "https://zoom.us/j/1234567890", // Added meeting link
    },
    {
      id: "app4",
      patientName: "Diana Miller",
      doctorName: "Dr. Michael Chen",
      type: "offline",
      dateTime: "2025-07-18 09:00 AM",
      status: "booked",
      paymentStatus: "pending",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Appointments Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Book New Appointment</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Book New Appointment</DialogTitle>
              <DialogDescription>Schedule a new appointment for a patient with a doctor.</DialogDescription>
            </DialogHeader>
            <AppointmentForm />
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Appointments</CardTitle>
          <CardDescription>View and manage all patient appointments, both online and offline.</CardDescription>
        </CardHeader>
        <CardContent>
          <AppointmentsTable appointments={appointments} />
        </CardContent>
      </Card>
    </div>
  )
}
