import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductItemParams {
    params: {
        id: string
    }
}


const ProductItemPage = async ({ params }: ProductItemParams) => {

    const product = await db.product.findFirstOrThrow({
        where: {
            id: params.id
        },
        include: {
            category: true
        }
    })

    const price = product.price.toNumber() / 10

    const percentage = (price * 10) / 100

    const priceWithPercentage = price + percentage



    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="w-fit flex px-2 pt-3 pb-2">
                <Link className="flex items-center" href={`/category/products/${product.category.id}`}>
                    <ChevronLeftIcon size={18} />
                    <p className="text-sm font-semibold">Voltar&nbsp;</p>
                    <p className="text-gray-600 text-sm">/</p>
                </Link>
                <p className="text-gray-600 text-sm">{product.category.name}/{product.name}</p>
            </div>

            <div className="pt-2 pb-5">
                <div className="relative h-[300px] w-full">
                    <Image className="object-cover" src={"/joia.png"} fill alt={`foto referente à ${product.name}`} />
                </div>
            </div>

            <Card className="bg-card flex rounded-b-none flex-1">
                <CardContent className="w-full py-3">
                    <h2 className="text-xl font-semibold break-words w-full">
                        {product.Description}
                    </h2>
                    <p className="text-3xl font-semibold mt-2 underline">
                        R${product.price.toNumber()}
                    </p>
                    {/* <p>Em até 10x de R${((product.price.toNumber() * 10) / 100 )} </p> */}
                    <p>Em até 10x de R${priceWithPercentage.toFixed(2)}</p>

                    {/* SHEET PARA MOSTRAR TABELA DE MEDIDAS */}
                    <Button className="rounded-md flex gap-1 items-center p-5 mt-5">
                        <RulerIcon />
                        <p> Tabela de Medidas</p>
                    </Button>
                    

                    {/* ESCOLHER TAMANHO. QUANTIDADE E SHEET PARA RESERVAR COM O VENDEDOR */}
                </CardContent>
            </Card>
        </div>
    );
}

export default ProductItemPage;