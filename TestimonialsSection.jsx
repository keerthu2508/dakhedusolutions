import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Dakh Edu Solution transformed our online presence completely. Their website design and digital marketing strategies helped us increase our customer base by 40% in just three months.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1659353219716-699803846194",
    delay: 0.1,
  },
  {
    quote: "The social media management team at Dakh Edu Solution is exceptional. They've helped us build a strong community around our brand and increased our engagement rates significantly.",
    name: "Michael Chen",
    title: "Marketing Director, Fusion Brands",
    avatar: "https://images.unsplash.com/photo-1592878863518-0357779ebc6a",
    delay: 0.2,
  },
  {
    quote: "The online workshop we organized with Dakh Edu Solution was a huge success. Their team handled everything from planning to execution, and our participants gave excellent feedback.",
    name: "Priya Patel",
    title: "Founder, EduLearn Academy",
    avatar: "https://images.unsplash.com/photo-1583712614713-3a796fe7c696",
    delay: 0.3,
  },
];

const TestimonialCard = ({ quote, name, title, avatar, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay }}
  >
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
        <p className="text-gray-600 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="mr-4">
            <img
              alt={`${name} testimonial avatar`}
              className="h-12 w-12 rounded-full object-cover"
              src={avatar} />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have experienced growth and success with our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;