import { z } from "zod";

export const createProductValidationSchmea = z.object({
  name: z.string({ required_error: "Name is required" }),
  brand: z.string({ required_error: "Brand is required" }),
  price: z.string({ required_error: "Price is requierd" }),
  category: z.string({ required_error: "Category is required." }),
  image: z.object({}),
  description: z.string({ required_error: "Description is required." }),
  quantity: z.string({ required_error: "Quantity is requierd" }),
  inStock: z.boolean({ required_error: "In stock is requied." }),
});
