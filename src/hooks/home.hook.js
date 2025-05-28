import { axiosPublic } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetALL = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/all");
        return res?.data;
      } catch (error) {
        throw {
          response: {
            data: error?.response?.data?.message || {
              message: "Network error",
            },
          },
        };
      }
    },
  });

  const hero = data?.data?.hero || [];
  const automation = data?.data?.automation || [];
  return { getall: data?.data, isLoading, hero, automation };
};
