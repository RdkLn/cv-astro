import { defineCollection,z } from "astro:content";
import { glob,file } from "astro/loaders";

const jobsCollection= defineCollection({
    schema: z.object({
        logo: z.string().url(),
        empresa: z.string(),
        puesto: z.string(),
        fechas: z.string(),
        descripcion: z.string(),
        ubicacion: z.string(),
        current: z.boolean(),
})
});


export const collections = {jobs:jobsCollection}