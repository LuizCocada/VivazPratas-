"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateCategoryParams {
  name: string;
  imageUrl: string;
}

export const createCategory = async (params: CreateCategoryParams) => {

  const user = await getServerSession(authOptions);

  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  await db.category.create({
    data: {
      name: params.name,
      imageUrl: params.imageUrl,
    },
  })
  revalidatePath("/admin/create_category")
  revalidatePath("/admin/delete_category")//pode quebrar a aplicação
};