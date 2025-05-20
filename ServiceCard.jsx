import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, iconBgColor, iconColor, title, description, details, linkTo, delay }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: delay || 0 }
    }
  };

  return (
    <motion.div variants={fadeIn}>
      <Card className="service-card h-full">
        <CardHeader className="pb-2">
          {Icon && (
            <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center mb-4`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
          )}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{details}</p>
          <Link to={linkTo} className="text-primary font-medium inline-flex items-center">
            Learn more <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;