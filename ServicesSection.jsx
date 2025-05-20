import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/homepage/ServiceCard";
import { Globe, Users, TrendingUp, Video, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const services = [
    {
      icon: Globe,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Website Design",
      description: "Professional and responsive websites tailored to your brand",
      details: "Custom-designed websites that are visually appealing, user-friendly, and optimized for all devices.",
      linkTo: "/#website-design",
    },
    {
      icon: Users,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Social Media Management",
      description: "Strategic social media presence to engage your audience",
      details: "Comprehensive social media strategies, content creation, and community management to build your brand.",
      linkTo: "/#social-media",
    },
    {
      icon: TrendingUp,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies for business growth",
      details: "SEO, PPC, email marketing, and content strategies to increase your online visibility and conversions.",
      linkTo: "/#digital-marketing",
    },
    {
      icon: Video,
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
      title: "Online Workshops",
      description: "Interactive learning experiences for skill development",
      details: "Expert-led workshops on digital skills, marketing strategies, and business development.",
      linkTo: "/#workshops",
    },
    {
      icon: Briefcase,
      iconBgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      title: "Freelancing Projects",
      description: "Professional freelance services for specific needs",
      details: "Access to skilled freelancers for one-time projects or ongoing collaborations.",
      linkTo: "/#freelancing",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the online world.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
           <motion.div variants={fadeIn}>
              <Card className="service-card h-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle>Custom Solutions</CardTitle>
                  <CardDescription className="text-white/80">
                    Tailored digital strategies for your unique business needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">
                    Let's discuss your specific requirements and create a customized plan for your business.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;