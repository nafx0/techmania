import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  sendEmailVerification,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

export default function SignUp({ className, ...props }) {

  const {registerManually} = useContext(AuthContext)
  const [form, setForm] = useState({
    email: "",
    pass: "",
    confPass: "",
  });

  const [errorMessage, setErrorMessage] = useState();
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (success) {
      toast.success("Successfully created a new account");
    }
  }, [success]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMessage("");
    setSuccess(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    function validatePassword(password) {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
    }

    const passValid = validatePassword(form.pass);

    if (!passValid) {
      setErrorMessage("Create a stronger password");
      return;
    }

    if (form.pass !== form.confPass) {
      setErrorMessage("Passwords don't match");
      return;
    }

    // Fixed promise chain
    registerManually(form.email, form.pass)
      .then((result) => {
        console.log(result.user);
        
        // Reset form and set success only after successful registration
        setForm({ email: "", pass: "", confPass: "" });
        setSuccess(true);
        
        // Send email verification after successful registration
        return sendEmailVerification(result.user);
      })
      .then(() => {
        console.log("Email verification sent!");
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
};

  return (
    <div className="bg-background flex min-h-svh relative flex-col items-center justify-center gap-6 pt-20 px-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <form onSubmit={handleRegister}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <a
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="flex size-8 items-center justify-center rounded-md">
                    <GalleryVerticalEnd className="size-6" />
                  </div>
                  <span className="sr-only">Gadget Heaven</span>
                </a>
                <h1 className="text-xl font-bold">Welcome to Gadget Heaven</h1>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="underline underline-offset-4 text-primary"
                  >
                    Log In
                  </NavLink>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="m@example.com"
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3 relative">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    name="pass"
                    placeholder="Enter your password"
                    value={form.pass}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-11 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <div className="grid gap-3 relative">
                  <div className="flex items-center">
                    <Label htmlFor="password">Confirm Password</Label>
                  </div>
                  <Input
                    name="confPass"
                    type={showConfPassword ? "text" : "password"}
                    value={form.confPass}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-11 transform -translate-y-1/2"
                    onClick={() => setShowConfPassword(!showConfPassword)}
                  >
                    {showConfPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </div>
            </div>
          </form>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
