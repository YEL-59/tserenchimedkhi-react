import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
//import { useGetUser, useRequestOTP, useResetPassword } from "@/hooks/auth.hook";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const changePasswordSchema = z
  .object({
    phone: z.string().min(1, 'Phone number is required'),
    otp: z
      .string({ required_error: 'OTP is required' })
      .min(1, 'OTP is required'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    password_confirmation: z
      .string()
      .min(1, 'Confirmation password is required'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ['password_confirmation'],
    message: 'Passwords do not match',
  });

export default function ChangePassword() {
  // const { user } = useGetUser();
  // const {
  //   mutate: requestOtp,
  //   data: otpResponse,
  //   isPending: isSendingOTP,
  // } = useRequestOTP();
  // const {
  //   mutate: resetPassword,
  //   data: resetResponse,
  //   isPending: isResetting,
  // } = useResetPassword();

  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      // phone: user?.phone,
      phone: '',
      otp: '',
      password: '',
      password_confirmation: '',
    },
  });

  // useEffect(() => {
  //   if (otpResponse?.data?.otp) {
  //     form.reset({
  //       phone: user?.phone,
  //       otp: otpResponse?.data?.otp?.toString(),
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [otpResponse, user]);

  // useEffect(() => {
  //   if (resetResponse) {
  //     form.reset({
  //       otp: "",
  //       password: "",
  //       password_confirmation: "",
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [resetResponse]);

  const handleResetPassword = () => {
    //resetPassword(data);
  };

  const handleSendOTP = () => {
    // requestOtp({ phone: user?.phone });
  };

  return (
    <div className="max-w-full mx-auto mt-10 space-y-6 @container">
      <>
        <div className="mb-5">
          <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
            Change Password
          </h1>
          <p className="text-[#8E8E8E] text-lg font-medium leading-normal">
            You can change your password anytime you think it is unsafe.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleResetPassword)}
            className="space-y-8 mt-8"
          >
            {/* New Password */}
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2 w-full">
                  <div className="flex-1 max-w-sm">
                    <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                      OTP
                    </h1>
                    <p className="hidden @2xl:block text-[#8E8E8E] text-lg font-medium leading-normal">
                      Type your OTP
                    </p>
                  </div>
                  <div className="flex-1 w-full @2xl:max-w-sm">
                    <div className="flex justify-end">
                      <Button
                        variant="link"
                        className="px-2"
                        onClick={handleSendOTP}
                        //disabled={isSendingOTP}
                        type="button"
                      >
                        Send OTP
                      </Button>
                    </div>
                    <FormControl>
                      <Input
                        className="w-full rounded-xl h-12 border-none px-4"
                        placeholder="Enter 4-digit OTP"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2 w-full">
                  <div className="flex-1 max-w-sm">
                    <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                      New Password
                    </h1>
                    <p className="hidden @2xl:block text-[#8E8E8E] text-lg font-medium leading-normal">
                      Enter new password.
                    </p>
                  </div>
                  <div className="flex-1 w-full @2xl:max-w-sm">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full rounded-xl h-12 border-none px-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2 w-full">
                  <div className="flex-1 max-w-sm">
                    <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                      Confirmation Password
                    </h1>
                    <p className="hidden @2xl:block text-[#8E8E8E] text-lg font-medium leading-normal">
                      Enter Confirmation Password.
                    </p>
                  </div>
                  <div className="flex-1 w-full @2xl:max-w-sm">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter Confirmation Password"
                        className="w-full rounded-xl h-12 border-none px-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right mt-1" />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                className="w-[168px] rounded-full h-12"
                type="submit"
                //  disabled={isResetting}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </>
    </div>
  );
}
