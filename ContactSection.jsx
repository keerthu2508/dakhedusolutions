import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram } from "lucide-react"; 
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or ready to start your project? Contact us today for a free consultation.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:dakhedusolution@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                    dakhedusolution@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <a href="https://www.instagram.com/dakh_edu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                    dakh_edu
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;