import {z} from "zod"

export const usernameValidation = z
     .string()
     .min(2, "username must be atleast 2 characters")
     .max(20, "Username must be no more than 20 characters")
     .regex(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$,"username must not contain special character")



     export const signUpSchema = z.object({
        username: usernameValidation,
        email: z.string().email({message: "Invalid Email Address"}),
        password: z.string().min(6,"password must be atleast 6 characters")
     })
     