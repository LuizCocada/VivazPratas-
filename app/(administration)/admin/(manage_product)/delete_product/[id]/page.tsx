
import DeleteProductItem from "@/components/AdmDeleteProductItem";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import Link from "next/link";


interface delete_productActionPageParams {
    params: {
        id: string
    }
}

const delete_productActionPage = async ({params}: delete_productActionPageParams) => {

    const products = await db.product.findMany({    
        where: {
            categoryId: params.id
        }
    });

    return ( 
        <div>
            <div>
                <div className="p-5 border-b border-black flex gap-10 items-center">
                    <Button asChild>
                        <Link href={"/admin/delete_product"}>
                            Voltar
                        </Link>
                    </Button>
                    <h2 className="text-2xl font-semibold">
                        Deletar <strong>Produto</strong>
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 p-5">
                {products.map((product) => (
                    <DeleteProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default delete_productActionPage;