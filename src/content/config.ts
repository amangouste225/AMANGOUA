import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    year: z.number(),
    image: z.string(),
    href: z.string(),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
};
