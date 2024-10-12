import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const AdmDeleteProductCategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <Link href={`/admin/delete_product/${category.id}`}>
            <Card className="min-w-[160px]">
                <CardContent className="p-10">
                    <div className="flex justify-center p-2">
                        <h3 className="font-semibold text-2xl truncate">{category.name}</h3>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default AdmDeleteProductCategoryItem;