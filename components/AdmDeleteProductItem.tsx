'use client'

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Product } from "@prisma/client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { deleteProduct } from "@/actions/delete-product";
import { toast } from "sonner";
import Decimal from "decimal.js"; 



interface ProductItemProps {
    product: Product
}

const DeleteProductItem = ({ product }: ProductItemProps) => {

    const handleRemoveProduct = async () => {
        try {
            await deleteProduct(product.id);
            toast.success('Produto removido com sucesso');
        }
        catch (error) {
            console.error(error);
            toast.error('Erro ao remover produto');
        }
    }

    const priceNumber = new Decimal(product.price).toNumber();
    const priceString = priceNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Card className="min-w-[160px] cursor-pointer">
                        <CardContent className="p-0">
                            <div className="relative h-[159px] w-full">
                                <Image className="object-cover rounded-xl" src={product.imageUrl} fill alt={`foto referente à ${product?.name}`} />
                            </div>

                            <div className="pl-2">
                                <h3 className="font-semibold truncate">{product?.name}</h3>
                                <p className="text-sm font-semibold">{priceString}</p>
                            </div>
                        </CardContent>
                    </Card>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Deseja remover este produto?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta ação não pode ser desfeita. Tem certeza que deseja remover o produto <strong>{product?.name}</strong>?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction asChild>
                            <Button onClick={handleRemoveProduct}>
                                Remover
                            </Button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default DeleteProductItem;