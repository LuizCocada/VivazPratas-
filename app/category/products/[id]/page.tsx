import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";


interface ProductPageParams {
    params: {
        id: string
    }
}

const ProductPage = async ({ params }: ProductPageParams) => {

    const category = await db.category.findUnique({
        where: {
            id: params.id
        },
        include: {
            products: true
        }
    })

    if (!category) {
        return notFound()
    }

    return (
        <>
            <Header />
            <div className="w-fit flex pl-5 pt-5">
                <Link className="flex items-center" href={"/"}>
                    <ChevronLeftIcon size={18} />
                    <p className="text-sm font-semibold">Voltar</p>
                    <p className="text-gray-600 text-sm">/</p>
                </Link>
                <p className="text-gray-600 text-sm">&nbsp;Início</p>
            </div>
            <div className="flex justify-center items-center mt-5">
                <h2 className="text-3xl font-semibold border-b-2 font-playfairDisplay">
                    {category?.name}
                </h2>
            </div >

            <div className="p-5">
                <div className="grid grid-cols-2 gap-4 pt-5">
                    {category?.products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>

    );
}

export default ProductPage;