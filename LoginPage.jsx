import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import PasswordRecoveryModal from "@/components/PasswordRecoveryModal";

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordRecoveryModalOpen, setIsPasswordRecoveryModalOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      if (email === "user@example.com" && password === "password123") {
        toast({
          title: "Login Successful",
          description: "Welcome back to Dakh Edu Solution!",
          variant: "default",
        });
        if (onLoginSuccess) {
          onLoginSuccess();
        }
        navigate("/", { replace: true });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openPasswordRecoveryModal = () => {
    setIsPasswordRecoveryModalOpen(true);
  };

  const closePasswordRecoveryModal = () => {
    setIsPasswordRecoveryModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl font-bold text-gradient mb-2 block">
                Dakh Edu Solution
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900">Welcome Back</h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to access your account
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl">Sign In</CardTitle>
                <CardDescription>
                  Enter user@example.com and password123 to continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openPasswordRecoveryModal();
                        }}
                        className="text-xs text-primary hover:text-primary/80"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="password123"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="focus:border-primary focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="remember" className="text-sm font-normal text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full" onClick={() => toast({title: "Supabase Required", description: "Please complete Supabase integration to enable Google Sign-In."})}>
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => toast({title: "Feature Coming Soon", description: "Facebook Sign-In is not yet implemented."})}>
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  Don't have an account?{" "}
                  <Link 
                    to="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      toast({ title: "Feature Coming Soon", description: "Registration is not yet implemented."});
                    }}
                    className="font-medium text-primary hover:text-primary/80">
                    Sign up
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{" "}
              <Link to="#" className="underline hover:text-gray-700" onClick={(e) => {e.preventDefault(); toast({title: "Info", description: "Terms of Service page coming soon."})}}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="underline hover:text-gray-700" onClick={(e) => {e.preventDefault(); toast({title: "Info", description: "Privacy Policy page coming soon."})}}>
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
      <PasswordRecoveryModal isOpen={isPasswordRecoveryModalOpen} onClose={closePasswordRecoveryModal} />
    </>
  );
};

export default LoginPage;