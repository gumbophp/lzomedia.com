import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),

    courses: defineCollection({
        schema: z.object({
            title: z.string(),
			image: z.string(),
			tags: z.array(z.string()),
            description: z.string(),
            publishDate: z.coerce.date(),
        }),
    }),

};
