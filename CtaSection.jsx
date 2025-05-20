import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have elevated their businesses with our comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;