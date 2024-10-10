"use server"

import { db } from "@/lib/prisma"

export const GetCategory = async () => {
    const category = await db.category.findMany({})

    return category
}
