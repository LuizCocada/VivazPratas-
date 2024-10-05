'use client'

import { Category } from "@prisma/client";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { deleteCategory } from "@/actions/delete-category";
import { useSession } from "next-auth/react";


interface CategoryItemProps {
    category: Category
}

const DeleteCategoryItem = ({ category }: CategoryItemProps) => {

    const { data } = useSession()

    if (!data?.user) {
        return 
    }

    const handleDeleteCategory = async () => {
        try {
            await deleteCategory(category.id)
        }
        catch (error) {
            console.log(error, "error ao deletar categoria")
        }
    }


    return (
        <div className="p-5 border-b border-gray-300 flex justify-between items-center">
            <p>{category.name}</p>
            <Button variant={"link"} onClick={(handleDeleteCategory)}>
                <TrashIcon size={20} />
            </Button>
        </div>
    );
}

export default DeleteCategoryItem;