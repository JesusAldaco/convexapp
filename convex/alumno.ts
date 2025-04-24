import { mutation, query } from "./_generated/server"

export const getAlumno = query({
    handler: async (ctx) => {
        return await ctx.db.query("alumno").collect()
    }
})

// export const editAlumno = mutation({

// })