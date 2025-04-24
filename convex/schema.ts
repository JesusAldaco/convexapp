import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    alumno: defineTable({
        carrera: v.string(),
        contacto: v.number(),
        matricula: v.number(),
        nombre: v.string(),
    })
})
