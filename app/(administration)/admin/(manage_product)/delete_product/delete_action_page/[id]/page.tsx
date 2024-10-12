import { db } from "@/lib/prisma";

interface delete_productActionPageParams {
    params: {
        id: string
    }
}


const Delete_product_actionPage = async ({params}: delete_productActionPageParams) => {
    
    const product = await db.product.findUnique({    
        where: {
            id: params.id
        }
    });

    return ( 
        <div>
            <h1>{product?.Description}</h1>
        </div>
     );
}
 
export default Delete_product_actionPage;