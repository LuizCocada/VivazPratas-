import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <Link href={`/category/products/${category.id}`} passHref>
            <Card className="min-w-[160px] transition-transform duration-300 ease-in-out transform hover:scale-95">
                <CardContent className="p-0">
                    <div className="relative h-[200px] w-full">
                        <Image
                            className="object-cover rounded-t-xl "
                            src={category.imageUrl}
                            fill
                            alt={`foto referente à ${category.name}`}
                        />
                    </div>

                    <div className="flex justify-center p-2">
                        <h3 className="font-semibold text-xl truncate">{category.name}</h3>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default CategoryItem;


