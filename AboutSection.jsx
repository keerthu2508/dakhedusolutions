import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <img
              alt="Dakh Edu Solution team working together"
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Dakh Edu Solution</h2>
            <p className="text-lg text-gray-600 mb-6">
              Dakh Edu Solution is a premier digital services provider dedicated to helping businesses establish a strong online presence and achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts combines creativity, technical expertise, and strategic thinking to deliver exceptional results for our clients across various industries.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-700">Expert Team</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-700">Customized Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-700">Proven Results</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-700">Client Satisfaction</span>
              </div>
            </div>
            <Button className="flex items-center">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;