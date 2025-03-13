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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Apple from "@/assets/apple";
import { signUpSchema } from "@/schemas/auth.schemas";

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

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
              <form onSubmit={form.handleSubmit(Signup)} className="space-y-4">
                <div>
                  <FormField
                    control={form.control}
                    name="fullname"
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
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full h-12 mb-6 mt-5" type="submit">
                    Sign Up
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
