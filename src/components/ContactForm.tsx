
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  licenseType: z.string().min(1, { message: "Please select a license type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const licenseTypes = [
  "Enterprise Software",
  "Creative Suite",
  "Database",
  "CRM",
  "ERP",
  "CAD/CAM",
  "Security Software",
  "Other"
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch with you shortly.",
      });
    }, 1000);
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 bottom-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl animate-float opacity-70"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-blur-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get Your <span className="text-gradient animate-gradient">Free Quote</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your software licenses and we'll get back to you with a valuation
          </p>
        </div>
        
        <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-8 shadow-soft animate-fade-in hover-lift">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" className="rounded-lg transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" type="email" className="rounded-lg transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" className="rounded-lg transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="licenseType"
                  render={({ field }) => (
                    <FormItem className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
                      <FormLabel>License Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="rounded-lg transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20">
                            <SelectValue placeholder="Select license type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-lg animate-fade-in">
                          {licenseTypes.map((type) => (
                            <SelectItem key={type} value={type} className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your software licenses (quantity, product names, etc.)" 
                        className="min-h-32 rounded-lg resize-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full rounded-lg py-6 text-base font-medium shadow-md btn-glow animate-fade-in" 
                style={{ animationDelay: '0.6s' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                    Processing...
                  </>
                ) : "Get My Free Quote"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
