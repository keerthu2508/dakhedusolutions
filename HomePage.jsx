import React from "react";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import AboutSection from "@/components/homepage/AboutSection";
import CtaSection from "@/components/homepage/CtaSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import ContactSection from "@/components/homepage/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;