import React from "react";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useUpdatePassword } from "@/hooks/auth.hook";
import bg1 from "../../assets/content1.png";
import bg2 from "../../assets/content2.png";

const UpdatePassword = () => {
  const { form, updatePassword, isUpdating } = useUpdatePassword();

  const onSubmit = (data) => updatePassword(data);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center">
      {/* Left Side (Form) */}
      <div
        className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Update Password</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="you@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Current Password */}
              <FormField
                control={form.control}
                name="old_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter current password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* New Password */}
              <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter new password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm New Password */}
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Re-enter new password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isUpdating}>
                {isUpdating ? "Updating..." : "Update Password"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div
        className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      />
    </div>
  );
};

export default UpdatePassword;
