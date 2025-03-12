import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useGetUser, useUpdateUser } from "@/hooks/auth.hook";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUploadIcon, ImagePlus } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  professional_title: z.string().min(1, "Job Title is required"),
  avatar: z
    .any()
    .transform((value) => {
      console.log(value);
      return typeof value === "string" ? undefined : value;
    })
    .refine(
      (value) =>
        value === undefined ||
        (z.instanceof(File).parse(value) && value.size !== 0),
      "Please upload an image"
    ),
});

export default function GeneralSettings() {
  //  const { user } = useGetUser();
  //const { mutate: updateProfile } = useUpdateUser();
  const [avatarPreview, setAvatarPreview] = useState("");

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      professional_title: "",
    },
  });

  // console.log({ user });

  // useEffect(() => {
  //   if (user) {
  //     form.reset(user);
  //   }
  // }, [user, form]);

  const onSubmit = () => {
    // updateProfile({ id: user?.id, data });
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setAvatarPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("avatar", acceptedFiles[0]);
        form.clearErrors("avatar");
      } catch {
        setAvatarPreview(null);
        form.resetField("avatar");
      }
    },
    [form]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: {
        "image/png": [],
        "image/jpg": [],
        "image/jpeg": [],
      },
    });

  return (
    <div className="@container">
      <div className="mb-5">
        <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
          General
        </h1>
        <p className="text-[#8E8E8E] text-lg font-medium leading-normal">
          This section allows you to customize various aspects of your account
          to enhance your experience
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2">
                <div className="flex-1 max-w-sm">
                  <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                    Profile Picture
                  </h1>
                  <p className="hidden @2xl:block text-[#8E8E8E] text-lg font-medium leading-normal">
                    This section allows you to customize various aspects of your
                    service to enhance your experience
                  </p>
                </div>
                <FormControl>
                  <div
                    {...getRootProps()}
                    className="flex-1 w-full @2xl:max-w-sm flex gap-[18px] items-center"
                  >
                    <Avatar
                      className={cn("size-[80px] cursor-pointer", {
                        "ring-2 ring-primary ring-offset-2":
                          !!avatarPreview || !!field.value,
                      })}
                    >
                      <AvatarImage
                        src={
                          avatarPreview ||
                          (field.value &&
                            `${import.meta.env.VITE_BASE_URL}/storage/${
                              field.value
                            }`)
                        }
                        alt="Uploaded image"
                      />
                      <AvatarFallback className="bg-muted border border-dashed">
                        <ImagePlus
                          className={`size-[40px] ${
                            avatarPreview ? "hidden" : "block"
                          }`}
                        />
                      </AvatarFallback>
                    </Avatar>
                    <Input {...getInputProps()} type="file" />
                    <div>
                      <Button
                        variant="outline"
                        type="button"
                        className="bg-transparent hover:bg-primary/10 rounded-full"
                      >
                        <CloudUploadIcon />
                        Upload profile picture
                      </Button>

                      {fileRejections.length !== 0 ? (
                        <FormMessage>
                          <p className="mt-[13px] text-sm">
                            Image must be less than 1MB and of type png, jpg, or
                            jpeg
                          </p>
                        </FormMessage>
                      ) : isDragActive ? (
                        <p className="text-muted-foreground mt-[13px] text-sm">
                          Drop the image!
                        </p>
                      ) : (
                        <p className="text-muted-foreground mt-[13px] text-sm">
                          At least 256x256 PNG or JPG file
                        </p>
                      )}
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2 w-full">
                <div className="flex-1 max-w-sm">
                  <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                    Name
                  </h1>
                  <p className="hidden @2xl:block text-[#8E8E8E] text-lg font-medium leading-normal">
                    This will let you update or change your displayed name
                  </p>
                </div>
                <div className="flex-1 w-full @2xl:max-w-sm">
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
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
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2 w-full">
                <div className="flex-1 max-w-sm">
                  <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                    Email Address
                  </h1>
                  <p className="hidden @2xl:block text-[#8E8E8E] text-lg font-medium leading-normal">
                    This email cannot be changed
                  </p>
                </div>
                <div className="flex-1 w-full @2xl:max-w-sm">
                  <FormControl>
                    <Input
                      placeholder="mdsaklain@gmail.com"
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
            name="professional_title"
            render={({ field }) => (
              <FormItem className="flex flex-col @2xl:flex-row @2xl:justify-between @2xl:items-center gap-2 w-full">
                <div className="flex-1 max-w-sm">
                  <h1 className="text-[#050505] text-2xl font-semibold leading-normal">
                    Job Title
                  </h1>
                  <p className="hidden @2xl:block text-[#8E8E8E] text-lg font-medium leading-normal">
                    This information will not be displayed on your profile
                  </p>
                </div>
                <div className="flex-1 w-full @2xl:max-w-sm">
                  <FormControl>
                    <Input
                      placeholder="Enter your job title"
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
            <Button className="w-[168px] rounded-full h-12 " type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
