'use client'

import { Category } from "@prisma/client";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { deleteCategory } from "@/actions/delete-category";
import { useSession } from "next-auth/react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";


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
            <p className="text-lg font-semibold">{category.name}</p>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="link">
                        <TrashIcon color="red" size={25} />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-[90%]">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Deletar Categoria</AlertDialogTitle>
                        <AlertDialogDescription>Deseja mesmo  esta categoria?</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-xl">Cancelar</AlertDialogCancel>
                        <AlertDialogAction className="rounded-xl bg-red-600" onClick={(handleDeleteCategory)}>
                            Confirmar
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default DeleteCategoryItem;






{/* <Button variant={"link"} onClick={(handleDeleteCategory)}>
    <TrashIcon color="red" size={20} />
</Button> */}