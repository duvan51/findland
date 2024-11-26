import { z } from 'zod'

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'El nombre debe tener al menos 3 letras.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Por favor, ingresar un email válido.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Debe tener un mínimo de 8 caracteres' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos 1 letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos 1 numero.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos 1 caracter especial.',
    })
    .trim(),
  role: z
    .string({message: 'Elegir 1 opcion'})
})

export const SignInFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, ingresar un email válido.' })
    .trim(),
  password: z
    .string()
    .trim(),
})
