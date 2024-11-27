"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"


export const deleteCategory = async (categoryId: string) => {
    await db.category.delete({
        where: {
            id: categoryId
        }
    })
    revalidatePath("/admin/create_category")
  revalidatePath("/admin/delete_category")//pode quebrar a aplicação
  revalidatePath("/")
}