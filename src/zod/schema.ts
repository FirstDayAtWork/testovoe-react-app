import z from 'zod';

const imageSchema = z
  .file({ error: 'Must be a file' })
  .mime(['image/png', 'image/jpeg'], { error: 'Must be PNG or JPEG' })
  .max(1_000_000, { error: 'Max 1MB' });

export const basicSchema = z.object({
  title: z
    .string()
    .regex(/^(?=[A-Z])/, { error: 'Must be Capitalized!' })
    .regex(/[a-zA-Z]{1,72}$/, { error: 'Use alphabet letters!' }),
  description: z
    .string()
    .regex(/^(?=[A-Z])/, { error: 'Must be Capitalized!' })
    .regex(/[a-zA-Z]{1,72}$/, { error: 'Use alphabet letters!' }),

  brand: z.string().regex(/[a-zA-Z]{1,72}$/, { error: 'Use alphabet letters!' }),
  category: z.string().regex(/[a-zA-Z]{1,72}$/, { error: 'Use alphabet letters!' }),

  stock: z.number().positive(),
  price: z.number().positive(),

  width: z.number().positive(),
  height: z.number().positive(),
  depth: z.number().positive(),

  image: imageSchema,
});

export type FormInputs = z.infer<typeof basicSchema>;
