"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export function StaffForm() {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [role, setRole] = useState<string>("nurse") // Updated default value
  const [doctorId, setDoctorId] = useState<string>("") // Updated default value

  // Dummy data for doctors
  const doctors = [
    { id: "doc1", name: "Dr. Emily White" },
    { id: "doc2", name: "Dr. John Smith" },
    { id: "doc3", name: "Dr. Sarah Lee" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({
      fullName,
      email,
      phone,
      role,
      doctorId: doctorId === "" ? null : doctorId, // Send null to backend if unassigned
    })
    toast({
      title: "Staff Member Added!",
      description: `${fullName} has been successfully added to the clinical staff.`,
    })
    // Reset form or close dialog
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="fullName" className="md:text-right">
          Full Name
        </Label>
        <Input
          id="fullName"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="md:text-right">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="md:col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="phone" className="md:text-right">
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="555-123-4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="md:col-span-3"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="role" className="md:text-right">
          Role
        </Label>
        <Select onValueChange={setRole} value={role}>
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nurse">Nurse</SelectItem>
            <SelectItem value="medical_assistant">Medical Assistant</SelectItem>
            <SelectItem value="receptionist">Receptionist</SelectItem>
            <SelectItem value="admin_assistant">Admin Assistant</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <Label htmlFor="assignedDoctor" className="md:text-right">
          Assigned Doctor (Optional)
        </Label>
        <Select
          onValueChange={(selectedValue) => {
            if (selectedValue === "unassigned-doctor") {
              setDoctorId("") // Set internal state to empty string for "unassigned"
            } else {
              setDoctorId(selectedValue)
            }
          }}
          value={doctorId === "" ? "unassigned-doctor" : doctorId}
        >
          <SelectTrigger className="md:col-span-3">
            <SelectValue placeholder="Assign to a doctor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="unassigned-doctor">None</SelectItem> {/* Option for unassigned staff */}
            {doctors.map((doctor) => (
              <SelectItem key={doctor.id} value={doctor.id}>
                {doctor.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="col-span-full mt-6">
        Add Staff Member
      </Button>
    </form>
  )
}
