import { useEffect, useRef } from "react";
import { useFormContext, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMatchOtp } from "@/hooks/auth.hook";
import bg1 from "../../assets/content1.png";
import bg2 from "../../assets/content2.png";

const OtpInput = ({ name, index, setFocusOnNext, setFocusOnPrev }) => {
  const { register, setValue, getValues } = useFormContext();
  const inputRef = useRef(null);

  useEffect(() => {
    if (index === 0 && inputRef.current) inputRef.current.focus();
  }, [index]);

  return (
    <Input
      type="text"
      maxLength={1}
      inputMode="numeric"
      className="w-12 h-12 text-center text-lg font-bold border"
      {...register(name, {
        required: true,
        onChange: (e) => {
          const val = e.target.value;
          if (!/^\d?$/.test(val)) {
            e.preventDefault();
            return;
          }

          setValue(name, val);
          if (val && setFocusOnNext) setFocusOnNext(index + 1);
        },
        onKeyDown: (e) => {
          if (e.key === "Backspace") {
            const val = getValues(name);
            if (!val && setFocusOnPrev) {
              setFocusOnPrev(index - 1);
            }
          }
        },
        onPaste: (e) => {
          const paste = e.clipboardData.getData("text");
          if (/^\d{6}$/.test(paste)) {
            [...paste].forEach((digit, i) => {
              setValue(`otp${i}`, digit);
            });
            setFocusOnNext(5); // Focus on last box
          }
          e.preventDefault();
        },
      })}
      ref={inputRef}
    />
  );
};

const VerifyOtp = () => {
  const { form, matchOtp, isMatching } = useMatchOtp();
  const { handleSubmit, setFocus } = form;

  const onSubmit = (data) => matchOtp(data);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center">
      <div
        className="w-full lg:w-1/2 h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Enter OTP</h2>
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-center gap-2">
                {[...Array(6)].map((_, i) => (
                  <OtpInput
                    key={i}
                    name={`otp${i}`}
                    index={i}
                    setFocusOnNext={(nextIndex) => {
                      if (nextIndex < 6) setFocus(`otp${nextIndex}`);
                    }}
                    setFocusOnPrev={(prevIndex) => {
                      if (prevIndex >= 0) setFocus(`otp${prevIndex}`);
                    }}
                  />
                ))}
              </div>
              <Button type="submit" className="w-full" disabled={isMatching}>
                {isMatching ? "Verifying..." : "Verify OTP"}
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

export default VerifyOtp;
