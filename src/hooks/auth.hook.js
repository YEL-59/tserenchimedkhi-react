import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import {
  sendOtpSchema,
  signInSchema,
  signUpSchema,
} from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation } from "react-router";
import { useNavigate, useSearchParams } from "react-router";

export const useSignUp = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const res = await axiosPublic.post("/signup/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || "User created successfully");
        const token = data?.data?.token;
        localStorage.setItem("token", token);
        const user = data?.data;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/sign-in");
      } else {
        // Extract and parse raw errors if available
        const rawErrors = data?.data?.error;
        if (Array.isArray(rawErrors) && rawErrors.length > 0) {
          try {
            const parsedErrors = JSON.parse(rawErrors[0].replace(/'/g, '"'));
            if (Array.isArray(parsedErrors)) {
              toast.error(parsedErrors.join(" "));
              return;
            }
          } catch (e) {
            toast.error(rawErrors[0]);
            return;
          }
        }

        toast.error(data?.message || "Failed to create user");
      }
    },

    onError: (error) => {
      const response = error?.response?.data;
      const fallbackMessage = response?.message || "Failed to create user";

      const rawErrors = response?.data?.error;

      if (Array.isArray(rawErrors) && rawErrors.length > 0) {
        try {
          const parsedErrors = JSON.parse(rawErrors[0].replace(/'/g, '"'));
          //because of the backend pass me as a array['a','b']that show 2 toast ,
          //   if (Array.isArray(parsedErrors)) {
          //     parsedErrors.forEach((err) => toast.error(err));
          //     return;
          //   }
          if (Array.isArray(parsedErrors)) {
            toast.error(parsedErrors.join(" "));
            return;
          }
        } catch (e) {
          toast.error(rawErrors[0]);
          return;
        }
      }

      toast.error(fallbackMessage);
    },
  });

  return { form, mutate, isPending };
};

//signIn

export const useSignIn = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = params.get("redirect");

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosPublic.post("/signin/", credentials);
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || "Sign in successfully");
        const token = data?.data?.access_token;
        localStorage.setItem("token", token);
        const user = data?.data;
        localStorage.setItem("user", JSON.stringify(user));
        if (redirectUrl) {
          navigate(redirectUrl);
        } else {
          navigate("/");
        }
      } else {
        // Extract and parse raw errors if available
        const rawErrors = data?.data?.error;
        if (Array.isArray(rawErrors) && rawErrors.length > 0) {
          try {
            const parsedErrors = JSON.parse(rawErrors[0].replace(/'/g, '"'));
            if (Array.isArray(parsedErrors)) {
              toast.error(parsedErrors.join(" "));
              return;
            }
          } catch (e) {
            toast.error(rawErrors[0]);
            return;
          }
        }

        toast.error(data?.message || "Failed to create user");
      }
    },

    onError: (error) => {
      const response = error?.response?.data;
      const fallbackMessage = response?.message || "Failed to create user";

      const rawErrors = response?.data?.error;

      if (Array.isArray(rawErrors) && rawErrors.length > 0) {
        try {
          const parsedErrors = JSON.parse(rawErrors[0].replace(/'/g, '"'));
          //because of the backend pass me as a array['a','b']that show 2 toast ,
          //   if (Array.isArray(parsedErrors)) {
          //     parsedErrors.forEach((err) => toast.error(err));
          //     return;
          //   }
          if (Array.isArray(parsedErrors)) {
            toast.error(parsedErrors.join(" "));
            return;
          }
        } catch (e) {
          toast.error(rawErrors[0]);
          return;
        }
      }

      toast.error(fallbackMessage);
    },
  });

  return { form, mutate, isPending };
};

//logout

export const useLogout = () => {
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const token = user?.refresh_token;

      if (!token) throw new Error("No refresh token found");

      return await axiosPublic.post(
        "/signout/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      navigate("/sign-in");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.detail || "Failed to logout. Try again."
      );
    },
  });

  return { logout, isPending };
};

//send otp
export const useSendOtp = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(sendOtpSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email }) => {
      const payload = {
        email: email,
      };
      const { data } = await axiosPublic.post("/send-otp/", payload);
      if (!data?.success) {
        throw new Error(data?.message || "Failed to send OTP");
      }
      return data;
    },
    onSuccess: (data) => {
      navigate("/verify-otp", {
        state: { email: form.watch("email") },
      });
      toast.success(data?.message || "OTP sent successfully");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Failed to send OTP");
    },
  });

  return { form, mutate, isPending };
};
//otp match
//  OTP Match function
export const useMatchOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const form = useForm({
    // resolver: zodResolver(matchOtpSchema),
    defaultValues: {
      email,

      otp0: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
    },
  });

  useEffect(() => {
    if (email) {
      form.reset({
        email,

        otp0: "",
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
        otp5: "",
      });
    }
  }, [email]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const otp = `${form.getValues("otp0")}${form.getValues(
        "otp1"
      )}${form.getValues("otp2")}${form.getValues("otp3")}${form.getValues(
        "otp4"
      )}${form.getValues("otp5")}`;

      navigate("/new-password", {
        state: {
          email: form.getValues("email"),
          otp,
        },
      });
      const payload = {
        email: formData.email,
        otp,
        operation: formData.operation,
      };

      const { data } = await axiosPublic.post("/verify-otp/", payload);

      return data;
    },
    onSuccess: (data) => {
      navigate("/new-password", {
        state: { email: form.watch("email"), otp: form.watch("otp") },
      });
      toast.success(data.message || "OTP Verified");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "OTP verification failed");
    },
  });

  return {
    form,
    matchOtp: mutate,
    isMatching: isPending,
  };
};

//  Reset-password function
export const useResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const otp = location.state?.otp || "";
  const form = useForm({
    // resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email,
      otp,
      new_password: "",
      confirm_password: "",
    },
  });

  useEffect(() => {
    if (email) {
      form.reset({
        email,
        otp,
        new_password: "",
        confirm_password: "",
      });
    }
  }, [email]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const payload = {
        email: formData.email,
        otp: formData.otp,
        new_password: formData.new_password,
        confirm_password: formData.confirm_password,
      };

      const { data } = await axiosPublic.post("/reset-password/", payload);

      if (!data?.success) {
        throw new Error(data?.message || "Reset failed");
      }

      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Password reset successful");
      navigate("/sign-in");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Password reset failed");
    },
  });

  return {
    form,
    resetPassword: mutate,
    isResetting: isPending,
  };
};

//update password function
export const useUpdatePassword = () => {
  const navigate = useNavigate();

  const form = useForm({
    // resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      email: "",
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const token = localStorage.getItem("token");
      const payload = {
        email: formData.email,
        old_password: formData.old_password,
        new_password: formData.new_password,
        confirm_password: formData.confirm_password,
      };

      const { data } = await axiosPrivate.patch("/change-password/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!data?.success) {
        throw new Error(data?.message || "Reset failed");
      }

      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Password update successful");
      navigate("/sign-in");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || "Password update failed");
    },
  });

  return {
    form,
    updatePassword: mutate,
    isUpdating: isPending,
  };
};
