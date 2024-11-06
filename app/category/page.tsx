import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

interface CategoryPageProps {
    searchParams: {
        title?: string
    }
}


const CategoryPage = async ({ searchParams }: CategoryPageProps) => {

    const products = await db.product.findMany({
        where: {
            name: {
                contains: searchParams.title,
                mode: "insensitive",
            },
        },
    })

    return (
        <>
            <Header />
            <div className="w-fit flex pl-5 pt-5">
                <Link className="flex items-center" href={"/"}>
                    <ChevronLeftIcon size={18} />
                    <p className="text-sm font-semibold">Voltar</p>
                    <p className="text-gray-600 text-sm">&nbsp;/</p>
                </Link>
                <p className="text-gray-600 text-sm">&nbsp;Início</p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default CategoryPage;