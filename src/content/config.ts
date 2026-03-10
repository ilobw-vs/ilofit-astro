import { defineCollection, z } from 'astro:content';

const palvelutCollection = defineCollection({
  type: 'data',
  schema: z.record(z.any()),
});

export const collections = {
  palvelut: palvelutCollection,
};