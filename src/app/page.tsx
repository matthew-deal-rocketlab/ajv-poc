"use client";

import AJVForm from "@/components/ajv/ajvForm";
import ZodForm from "@/components/zod/zodForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-4xl font-bold text-left">AJV POC</h1>
      <div className="border-b-2 mb-20"></div>
      <div className="grid grid-cols-2 gap-20">
        <AJVForm />
        <ZodForm />
      </div>
    </main>
  );
}
