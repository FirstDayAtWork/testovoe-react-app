import z from 'zod';

const imageSchema = z
  .file({ error: 'Must be a file' })
  .mime(['image/png', 'image/jpeg'], { error: 'Must be PNG or JPEG' })
  .max(1_000_000, { error: 'Max 1MB' });

const stringValidation = z
  .string()
  .min(2)
  .max(72)
  .regex(/^[A-Z]/, { error: 'Must be Capitalized!' })
  .regex(/^[\s\w]+$/, { error: 'Word chars and spaces only!' })
  .trim();

export const basicSchema = z.object({
  title: stringValidation,
  description: stringValidation,

  brand: stringValidation,
  category: stringValidation,

  stock: z.number().positive(),
  price: z.number().positive(),

  width: z.number().positive(),
  height: z.number().positive(),
  depth: z.number().positive(),

  image: imageSchema,
});

export type FormInputs = z.infer<typeof basicSchema>;
