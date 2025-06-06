import Google from "@/assets/gooogle";
import bg1 from "../../assets/content1.png";
import bg2 from "../../assets/content2.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Link } from "react-router";
import Apple from "@/assets/apple";
import { useSignUp } from "@/hooks/auth.hook";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const { form, mutate, isPending } = useSignUp();

  const onSubmit = (data) => {
    mutate(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div
          className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="p-8 lg:p-20 max-w-lg mx-auto w-full">
            <h1 className="text-[#120A0B] text-center font-montserrat text-xl lg:text-2xl font-bold leading-[140%] tracking-[-1px] mb-4">
              Create Your Account
            </h1>

            <p className="text-[#454140] text-center font-montserrat text-sm lg:text-base font-normal leading-[170%] mb-6">
              Please fill in your details to sign up.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div>
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Email Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                              {...field}
                              className="pr-10"
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                              {showPassword ? (
                                <Eye size={18} />
                              ) : (
                                <EyeOff size={18} />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    disabled={isPending}
                    className="w-full h-12 mb-6 mt-5"
                    type="submit"
                  >
                    {isPending ? "Signing Up..." : "Sign Up"}
                  </Button>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    className="w-full h-12 bg-white text-black flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <Google />
                    <span>Sign Up with Google</span>
                  </Button>
                  <Button
                    className="w-full h-12 bg-white text-black flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <Apple />
                    <span>Sign Up with Apple</span>
                  </Button>
                </div>

                <div className="flex justify-center">
                  <p className="text-foreground/70 space-x-2 text-sm">
                    <span>Already have an account?</span>
                    <Link to="/sign-in" className="font-medium">
                      Sign In here!
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        />
      </div>
    </div>
  );
};

export default Signup;
