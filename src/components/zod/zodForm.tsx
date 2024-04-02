"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/schemas/zodSchema";
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

export default function ZodForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function zodOnSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const errors = form.formState.errors.root?.message;

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="font-bold text-2xl">Zod Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(zodOnSubmit)} className="space-y-8">
          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-xl"
                    placeholder="username"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors}</FormMessage>
              </FormItem>
            )}
          />
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-xl"
                    placeholder="email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors}</FormMessage>
              </FormItem>
            )}
          />
          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-xl"
                    placeholder="password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
