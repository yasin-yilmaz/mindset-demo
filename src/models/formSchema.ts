import { z } from "zod";
import { trRegex } from "../utils/controls";
import isMobilePhone from "validator/es/lib/isMobilePhone";

export const formSchema = z.object({
  subject: z.string(),
  fullName: z
    .string()
    .trim()
    .regex(trRegex, { message: "hatalı isim" })
    .min(3, { message: "en az 3 karakter giriniz" }),
  email: z
    .string({ required_error: "lutfen e-mail adresinizi giriniz" })
    .email({ message: "gecersiz e-mail adresi" }),
  phone: z
    .string()
    .refine(isMobilePhone, { message: "gecerli bir telefon numarasi giriniz" }),
  message: z.string().optional(),
});

export type TFormData = z.infer<typeof formSchema>;
