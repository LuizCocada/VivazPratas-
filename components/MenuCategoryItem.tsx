import Link from "next/link";
import { SheetClose } from "./ui/sheet";
import { Category } from "@prisma/client";

interface CategoryItemProps {
    category: Category
}

const MenuCategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <SheetClose asChild>
            <Link href={`/category/products/${category.id}`} className="text-sm font-medium border-b pb-2">
                {category.name}
            </Link>
        </SheetClose>
    );
}

export default MenuCategoryItem;