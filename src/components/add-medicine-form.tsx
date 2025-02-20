// app/components/add-medicine-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { toast } from "@/components/ui/use-toast";
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  medicineName: z.string().min(2, {
    message: "Medicine name must be at least 2 characters.",
  }),
  dosage: z.string().min(1, {
    message: "Please enter the dosage.",
  }),
  frequency: z.string({
    required_error: "Please select dosage frequency.",
  }),
  timing: z.string({
    required_error: "Please select when to take the medicine.",
  }),
  duration: z.string().min(1, {
    message: "Please enter the duration.",
  }),
  startDate: z.string().min(1, {
    message: "Please select a start date.",
  }),
});

export function AddMedicineForm() {
    const {toast} = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      medicineName: "",
      dosage: "",
      frequency: "",
      timing: "",
      duration: "",
      startDate: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Medicine Added",
      description: "New medicine has been added to your schedule.",
    });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="medicineName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medicine Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter medicine name" {...field} />
              </FormControl>
              <FormDescription>
                Enter the full name of the medicine as written on the prescription.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dosage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dosage</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 500mg" {...field} />
              </FormControl>
              <FormDescription>
                Enter the amount to be taken each time.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frequency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="once">Once daily</SelectItem>
                  <SelectItem value="twice">Twice daily</SelectItem>
                  <SelectItem value="thrice">Thrice daily</SelectItem>
                  <SelectItem value="four">Four times a day</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                How many times per day should the medicine be taken?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="timing"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Timing</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select when to take" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="before">Before meals</SelectItem>
                  <SelectItem value="after">After meals</SelectItem>
                  <SelectItem value="with">With meals</SelectItem>
                  <SelectItem value="empty">On empty stomach</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (days)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                How many days should this medicine be taken?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Add Medicine</Button>
      </form>
    </Form>
  );
}