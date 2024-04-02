import { JSONSchemaType } from "ajv";

// Reusable type definitions
const stringType = { type: "string" };

const emailType = {
  ...stringType,
  format: "email",
  errorMessage: "Please enter a valid email address",
};

const passwordType = {
  ...stringType,
  minLength: 6,
  errorMessage: "Password must be at least 6 characters long",
};

// Export the schema for the form
export interface MyData {
  userName: string;
  email: string;
  password: string;
}

export const formSchema = {
  type: "object",
  properties: {
    userName: {
      ...stringType,
      minLength: 1,
      errorMessage: "Username is required.",
    },
    email: emailType,
    password: passwordType,
  },
  required: ["userName", "email", "password"],
  additionalProperties: false,
} as JSONSchemaType<MyData>;

//  This technically isn't type safe, this could be any type.
