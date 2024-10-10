"use server"

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";

interface CreateProductParams {
  categoryId: string;
  name: string;
  description?: string;
  price: string;
  image: string;
}

export const addProduct = async (params: CreateProductParams) => {
  const user = await getServerSession(authOptions);

  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  await db.product.create({
    data: {
      name: params.name,
      Description: params.description,
      price: params.price,
      imageUrl: params.image,
      categoryId: params.categoryId,
    },
  });
};
