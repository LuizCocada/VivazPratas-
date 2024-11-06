import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Product } from "@prisma/client";
import Link from "next/link";
import Decimal from "decimal.js";


interface ProductItemProps {
    product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {

    const priceNumber = new Decimal(product.price).toNumber();
    const priceDecimalToString = priceNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Link href={`/product/${product.id}`}>
            <Card className="min-w-[160px] transition-transform duration-300 ease-in-out transform hover:scale-95">
                <CardContent className="p-0">
                    <div className="relative h-[159px] w-full">
                        <Image className="object-cover rounded-xl" src={product.imageUrl} fill alt={`foto referente à ${product?.name}`} />
                    </div>

                    <div className="pl-2">
                        <h3 className="font-medium truncate font-playfairDisplay">{product?.name}</h3>
                        <p className="text-sm font-semibold">
                            {priceDecimalToString}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default ProductItem;