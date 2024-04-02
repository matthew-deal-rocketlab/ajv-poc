// AJVForm.jsx or AJVForm.tsx
"use client";

import addFormats from "ajv-formats";
import { useForm } from "react-hook-form";
import { fullFormats } from "ajv-formats/dist/formats";
import { ajvResolver } from "@hookform/resolvers/ajv";
import Ajv from "ajv";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { formSchema, MyData } from "@/schemas/ajvSchema";

export default function AJVForm() {
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);

  const form = useForm<MyData>({
    resolver: ajvResolver(formSchema, { formats: fullFormats }),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: MyData) => {
    console.log(data);
  };

  const errors = form.formState.errors.root?.message;

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="font-bold text-2xl">AJV Form</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mb-12"
        >
          {/* Username Field */}
          <FormField
            control={form.control}
            name="userName"
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
