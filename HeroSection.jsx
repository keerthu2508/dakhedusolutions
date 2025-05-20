import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Digital Presence with Dakh Edu Solution
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Professional website design, social media management, digital marketing,
              online workshops, and freelancing projects to elevate your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                alt="Digital marketing professionals working on a project"
                className="rounded-lg shadow-2xl"
                src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                  <span className="font-semibold text-gray-800">100+ Projects Completed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;