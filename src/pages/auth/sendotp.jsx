/* eslint-disable no-irregular-whitespace */

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
import { useSendOtp, useSignIn } from "@/hooks/auth.hook";

const Sendotp = () => {
  const { form, mutate, isPending } = useSendOtp();

  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Left Section */}
        <div
          className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="p-8 lg:p-20 max-w-lg mx-auto w-full">
            <h1 className="text-[#120A0B] text-center font-montserrat text-3xl lg:text-4xl font-bold leading-[140%] tracking-[-1px] mb-4">
              Welcome Back!
            </h1>

            <p className="text-[#454140] text-center font-montserrat text-sm lg:text-md font-normal leading-[170%] mb-6">
              Please fill in your Email and Password to Sign In.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div>
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

                  <Button
                    disable={isPending}
                    className="w-full h-12 mb-6 mt-5"
                    type="submit"
                  >
                    {isPending ? "Sending..." : "Send"}
                  </Button>
                </div>

                {/* <div className="flex flex-col gap-4">
                  <Button
                    className="w-full h-12 bg-white text-black flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <Google />
                    <span>Sign in with Google</span>
                  </Button>
                  <Button
                    className="w-full h-12 bg-white text-black flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <Apple />
                    <span>Sign in with Apple</span>
                  </Button>
                </div> */}

                <div className="flex justify-center">
                  <p className="text-foreground/70 space-x-2 text-sm">
                    <span>Don’t have an Account?</span>
                    <Link to="/sign-up" className="font-medium">
                       Sign-Up here!
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

export default Sendotp;
