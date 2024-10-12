import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Product } from "@prisma/client";
import Link from "next/link";


interface ProductItemProps {
    product: Product
}

const DeleteProductItem = ({ product }: ProductItemProps) => {
    return (
        <Link href={`/admin/delete_product/delete_action_page/${product.id}`}>
            <Card className="min-w-[160px]">
                <CardContent className="p-0">
                    <div className="relative h-[159px] w-full">
                        <Image className="object-cover rounded-xl" src={product.imageUrl} fill alt={`foto referente à ${product?.name}`} />
                    </div>

                    <div className="pl-2">
                        <h3 className="font-semibold truncate">{product?.name}</h3>
                        <p className="text-sm font-semibold">R$ {product?.price.toNumber()}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default DeleteProductItem;