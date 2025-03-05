import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const userRegistrationValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  password: z.string({ required_error: "Password is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  image: z
    .any()
    .refine((file) => file?.size, "image is required")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});
export const userLoginValidationSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z.string({ required_error: "Password is required" }),
});
