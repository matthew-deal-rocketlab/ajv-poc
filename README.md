## Getting Started

Install dependencies:
we are using `pnpm` as package manager, install the dependencies with:

```bash
pnpm install
```

Then run the project with:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There are two forms, one is validated with AJV and the other with Zod.

This POC was made for two purposes:

1. To test AJV with ShadCn and React Hook Form
2. To Compare Zod with AJV

> It might be worth testing other libraries like Yup, Joi, etc.

Findings:

AJV GOOD:

- AJV is a mature library
- AJV is very fast at scale

AJV BAD:

- AJV is a big package at 123ks
- AJV is very verbose
- AJV requires manual duplication of TypeScript types in its schema for type safety, which can still technically allow any type to be passed.
- AJV in React requires three dependencies, Ajv, Ajv-formats, and Ajv-errors
- AJV in a complex form would lead to a huge schema file.

ZOD GOOD:

- Zod is TS, and can be inferred, which leads to a better DX and less code in production
- Zod is a small package at 53ks
- Zod is less verbose

ZOD BAD:

- Zod has some weird behaviors, such as converting a string to a number.

Check out the schemas for a real comparison between the two libraries.

## Schemas

- Ajv Path: src/schemas/ajvSchema.ts **40 lines of code**
- Zod Path: src/schemas/zodSchema.ts **19 lines of code**

## Platforms that are suggesting the use of Zod

- [Next.js](https://nextjs.org/)
- [Next-Auth](https://next-auth.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [TRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [Create T3 App](https://create.t3.gg/)
- [Blitz](https://blitzjs.com/)
