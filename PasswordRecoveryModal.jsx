import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

const PasswordRecoveryModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Password Reset Email Sent (Mock)",
        description: `If an account exists for ${email}, you will receive password reset instructions. (This is a mock response)`,
      });
      onClose();
      setEmail("");
    }, 1500);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="shadow-2xl">
              <CardHeader className="relative">
                <CardTitle className="text-xl">Reset Password</CardTitle>
                <CardDescription>
                  Enter your email address and we'll send you a link to reset your password.
                </CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 rounded-full"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recovery-email">Email Address</Label>
                    <Input
                      id="recovery-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-gray-500">
                  If you don't receive an email, please check your spam folder or try again.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordRecoveryModal;