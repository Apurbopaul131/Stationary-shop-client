import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const createProductValidationSchmea = z.object({
  name: z.string({ required_error: "Name is required" }),
  brand: z.string({ required_error: "Brand is required" }),
  price: z.number({ required_error: "Price is requierd" }),
  category: z.string({ required_error: "Category is required." }),
  image: z
    .any()
    .refine((file) => file?.size, "Image is required")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  description: z.string({ required_error: "Description is required." }),
  quantity: z.number({ required_error: "Quantity is requierd" }),
  inStock: z.boolean({ required_error: "In stock is requied." }),
});

export const updateProductValidationSchmea = z.object({
  name: z.string({ required_error: "Name is required" }),
  brand: z.string({ required_error: "Brand is required" }),
  price: z.number({ required_error: "Price is requierd" }),
  category: z.string({ required_error: "Category is required." }),
  image: z.string({ required_error: "Image url is requierd" }),
  description: z.string({ required_error: "Description is required." }),
  quantity: z.number({ required_error: "Quantity is requierd" }),
  inStock: z.boolean({ required_error: "In stock is requied." }),
});
