"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  username: z.string().min(1),
  password: z
    .string()
    .min(1, { message: "The password must have atleast 8 characters" }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(FormSchema),
  });

  const submitHandler = () => {};
  return (
    <div className="bg-gray-200 flex justify-center w-full items-center">
      <div className="  bg-white py-12 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-8"
          >
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={() => (
                  <FormItem>
                    <FormLabel>Username/Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="!border-b !p-0 m-0 h-0 rounded-none border-b-[#e6e5e5] border-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={() => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="!border-b !p-0 m-0 h-0 rounded-none border-b-[#e6e5e5] border-0"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="submit"
                  className="w-full bg-[#6A5AFE] hover:bg-[#6a5afe] hover:text-white text-white border-none rounded-none  "
                  variant="outline"
                >
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="profile-main-loader">
                  <div className="loader">
                    <svg className="circular-loader" viewBox="25 25 50 50">
                      <circle
                        className="loader-path"
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke="#70c542"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </form>
        </Form>
      </div>
    </div>
  );
}
