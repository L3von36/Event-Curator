import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  date: z.date({
    required_error: "A date of event is required.",
  }),
  guests: z.string().min(1, "Please enter estimated guest count"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Booking() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      guests: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast.success("Inquiry Submitted", {
      description: "Our team will contact you within 24 hours.",
    });
    form.reset();
  }

  return (
    <section id="booking" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Begin Your Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every grand celebration begins with a conversation. Share the details of your vision with us, and let our team of expert planners craft an experience that transcends the ordinary.
            </p>
            <div className="space-y-6 text-foreground">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-serif italic font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Inquiry</h4>
                  <p className="text-muted-foreground text-sm">Tell us about your event using the form.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-serif italic font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Consultation</h4>
                  <p className="text-muted-foreground text-sm">We'll schedule a meeting to discuss your vision in detail.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-serif italic font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Proposal</h4>
                  <p className="text-muted-foreground text-sm">Receive a customized event proposal and design board.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5] w-full bg-background p-8 md:p-10 rounded-2xl border border-border shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" className="bg-card border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" type="email" className="bg-card border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" type="tel" className="bg-card border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-card border-border">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Luxury Wedding</SelectItem>
                            <SelectItem value="newyear">Enkutatash Celebration</SelectItem>
                            <SelectItem value="corporate">Corporate Gala</SelectItem>
                            <SelectItem value="birthday">Milestone Birthday</SelectItem>
                            <SelectItem value="other">Other Event</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal bg-card border-border hover:bg-card hover:text-foreground",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Guests</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. 150" type="number" className="bg-card border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card border-border">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your vision..." 
                          className="resize-none bg-card border-border min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg mt-4"
                >
                  Submit Inquiry
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
