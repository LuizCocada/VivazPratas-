
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import SelectRingSize from "@/components/SelectRingSize";
import { priceWithporcentage } from "@/constants/priceWithPorcentage";
import NumberOfProducts from "@/components/NumberOfProducts";
import Decimal from "decimal.js";
import ProductItem from "@/components/ProductItem";


interface ProductItemParams {
    params: {
        id: string
    },
    searchParams: {
        // ringsize?: string
        quantity?: string
    }
}

const ProductItemPage = async ({ params, searchParams }: ProductItemParams) => {

    const product = await db.product.findFirstOrThrow({
        where: {
            id: params.id
        },
        include: {
            category: true
        }
    })

    const relatedProducts = await db.product.findMany({
        where: {
            categoryId: product.categoryId
        }
    })

    //Preco com porcentagem por parcela
    const priceWithpercentagePerInstallment = priceWithporcentage({
        props: {
            price: product.price.toNumber(), //preco do produto
            installments: 10, //numero de pareclas
            percentage: 16, //porcentagem
        }
    })

    // const ringSize = searchParams.ringsize//tamanho do anel 
    const quantityProducts = searchParams.quantity//quantidade



    const messageWhatsApp = `
Olá, Gabriel, Gostaria de concluir minha compra! 😊

*Produto*: ${product.name}
*visualizar Imagem*: ${product.imageUrl}
*Quantidade*: ${quantityProducts}

Aguardo retorno para finalizar! Obrigado!
`

    const priceNumber = new Decimal(product.price).toNumber();
    const priceDecimalToString = priceNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    // const parOfRingCategoryId = "cm2jsa03p0002b9ohw7i5x88k" //Par de Alianças
    // const SolitaryRingCategoryId = "cm2jsaqxm0003b9ohux2n8aic" //Anéis Solitários



    return (
        <div className="flex flex-col">
            <Header />

            <div className="w-fit flex items-center px-2 pt-3 pb-2">
                <Link className="flex items-center" href={`/category/products/${product.category.id}`}>
                    <ChevronLeftIcon size={18} />
                    <p className="text-sm font-semibold ml-2">Voltar</p>
                    <p className="text-gray-600 text-sm">&nbsp;/&nbsp;</p>
                </Link>
                <p className="text-gray-600 text-sm ml-2">{product.category.name}/{product.name}</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:space-x-6 p-5">
                {/* Imagem */}
                <div className="w-full md:w-1/2 pb-5">
                    <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                        <Image
                            className="object-cover"
                            src={product.imageUrl}
                            layout="fill"
                            alt={`foto referente à ${product.name}`}
                        />
                    </div>
                </div>

                <Card className="w-full md:w-1/2 bg-card rounded-2xl flex flex-col">
                    <CardContent className="w-full py-5">
                        <h2 className="text-xl font-semibold break-words w-full font-playfairDisplay ">
                            {product.name}
                        </h2>
                        <h2 className="text-xl  break-words w-full font-playfairDisplay">
                            {product.Description}
                        </h2>


                        <div className="flex justify-between items-center mb-5">
                            <div>
                                <p className="text-3xl font-semibold mt-2 underline">
                                    {priceDecimalToString}
                                </p>
                                <p>Em até 10x de R${priceWithpercentagePerInstallment}</p>
                            </div>

                            <Button className="rounded-md flex gap-2 items-center">
                                <RulerIcon />
                                <p className="font-semibold">Medidas</p>
                            </Button>
                        </div>

                        {/* {(product.category.id === SolitaryRingCategoryId || product.category.id === parOfRingCategoryId) && (
                            <div className="mt-2 space-y-1">
                                <p className="text-sm font-semibold px-1">Selecione o tamanho do aro*</p>
                                <SelectRingSize />
                            </div>
                        )} */}

                        <div className="mt-2 space-y-1">
                            <p className="text-sm font-semibold px-1">Quantidade*</p>
                            <NumberOfProducts />
                        </div>

                        <Link
                            // href={`https://wa.me/5585994517813?text=${encodeURIComponent(
                            //     ringSize ? messageWithRingSizeWhatsApp : messageNoRingSizeWhatsApp
                            // )}`}
                            href={`https://wa.me/5585994517813?text=${encodeURIComponent(messageWhatsApp)}`}
                            target="_blank"
                        >
                            <Button
                                // disabled={(product.category.id === SolitaryRingCategoryId || product.category.id === parOfRingCategoryId) && !ringSize}
                                disabled={!quantityProducts || quantityProducts === '0'}
                                className="rounded-lg mt-5 w-full p-5 py-6 text-lg font-semibold"
                            >
                                Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>


            <Card>
                <CardContent className="p-5 space-y-5">
                    <CardTitle>Mais de {product.category.name}</CardTitle>
                    <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden pb-3 sm:grid grid-cols-2 md:grid-cols-4">
                        {relatedProducts.map((product) => (
                            <div key={product.id}  className="w-40 sm:w-full">
                                <ProductItem product={product} />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>



        </div>
    );
}

export default ProductItemPage;
