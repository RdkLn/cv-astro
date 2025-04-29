import { defineCollection,z } from "astro:content";
import { glob,file } from "astro/loaders";

const jobs= defineCollection({
    schema: z.object({
        logo: z.string().url(),
        empresa: z.string(),
        puesto: z.string(),
        fechas: z.string(),
        descripcion: z.string(),
        ubicacion: z.string(),
})
});


export const collections = {jobs}