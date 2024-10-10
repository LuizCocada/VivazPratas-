
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SelectRingSize from "@/components/SelectRingSize";
import { priceWithporcentage } from "@/constants/priceWithPorcentage";
import NumberOfProducts from "@/components/NumberOfProducts";


interface ProductItemParams {
    params: {
        id: string
    },
    searchParams: {
        ringsize?: string
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

    //Preco com porcentagem por parcela
    const priceWithpercentagePerInstallment = priceWithporcentage({
        props: {
            price: product.price.toNumber(), //preco do produto
            installments: 5, //numero de pareclas
            percentage: 7.57, //porcentagem
        }
    })

    const ringSize = searchParams.ringsize//tamanho do anel 
    const quantityProducts = searchParams.quantity//quantidade

    const messageWhatsApp = `
    Olá, Gabriel, Gostaria de concluir minha compra! 😊

    *Produto*: ${product.name}
    *visualizar Imagem*: https://2448.cdn.simplo7.net/static/2448/sku/trabalhadas-alianca-de-noivado-e-casamento-com-3-gramas-a-unidade-rendeira-mod0063-p-1704477255866.jpeg
    *Especificações da joia*: ${ringSize}
    *Quantidade*: Quantidade: ${quantityProducts}
    
    Aguardo retorno para finalizar! Obrigado!
`


    const ringCategoryId = "cm18coqlh00006csvvhcmdspu" //aneis
    const parOfRingCategoryId = "cm18corqq00056csvpo8x58we" //par de aliança
    const allianceCategoryId = "cm18couj8000k6csv7b4tswxe" //aliança



    return ( //caso de merda colocar isso no classname min-h-screen
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
                    <Image className="object-cover" src={product.imageUrl} fill alt={`foto referente à ${product.name}`} />
                </div>
            </div>

            <Card className="bg-card flex rounded-b-none flex-1">
                <CardContent className="w-full py-3 ">
                    <h2 className="text-xl font-semibold break-words w-full">
                        {product.Description}
                    </h2>

                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <p className="text-3xl font-semibold mt-2 underline">
                                R${product.price.toNumber()}
                            </p>
                            <p>Em até 10x de R${priceWithpercentagePerInstallment}</p>
                        </div>

                        <Button className="rounded-md flex gap-2 items-center">
                            <RulerIcon />
                            <p className="font-semibold">Medidas</p>
                        </Button>
                    </div>

                    {(product.category.id == ringCategoryId || product.category.id == parOfRingCategoryId || product.category.id == allianceCategoryId) && (
                        <div className="mt-2 space-y-1">
                            <p className="text-sm font-semibold px-1">Selecione o tamanho do aro*</p>
                            <SelectRingSize />
                        </div>
                    )}


                    <div className="mt-2 space-y-1">
                        <p className="text-sm font-semibold px-1">Quantidade*</p>
                        <NumberOfProducts />
                    </div>

                    <Link
                        href={`https://wa.me/5585996955587?text=${encodeURIComponent(messageWhatsApp)}`}
                        target="_blank"
                    >
                        <Button className="rounded-lg mt-5 w-full p-5 py-6 text-lg font-semibold">
                            Comprar
                        </Button>
                    </Link>

                </CardContent>
            </Card>
        </div>
    );
}

export default ProductItemPage;