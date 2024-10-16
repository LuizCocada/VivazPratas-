'use server'

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const deleteProduct = async (productId: string) => {
    await db.product.delete({
        where: {
            id: productId
        }
    })
    revalidatePath('/admin/delete_product')
}