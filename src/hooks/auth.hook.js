import { axiosPublic } from "@/lib/axios.config";
import { signUpSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

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
