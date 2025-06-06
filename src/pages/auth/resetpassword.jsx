import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormProvider } from "react-hook-form";
import { useResetPassword } from "@/hooks/auth.hook";
import bg1 from "../../assets/content1.png";
import bg2 from "../../assets/content2.png";

const ResetPassword = () => {
  const { form, resetPassword, isResetting } = useResetPassword();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    resetPassword(data);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center">
      <div
        className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            Reset Password
          </h2>

          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  disabled
                />
              </div>

              {/* OTP */}
              <div>
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  maxLength={6}
                  {...register("otp")}
                  disabled
                />
              </div>

              {/* New Password */}
              <div>
                <Label htmlFor="new_password">New Password</Label>
                <Input
                  id="new_password"
                  type="password"
                  {...register("new_password")}
                />
                {errors.new_password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.new_password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  {...register("confirm_password")}
                />
                {errors.confirm_password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" disabled={isResetting}>
                {isResetting ? "Resetting..." : "Reset Password"}
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      />
    </div>
  );
};

export default ResetPassword;
