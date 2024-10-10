import { GetCategory } from "@/actions/get-category";
import DeleteCategoryItem from "@/components/DeleteCategoryItem";
import { Button } from "@/components/ui/button";
import { CircleSlash, Divide } from "lucide-react";
import Link from "next/link";


const delete_categoryPage = async () => {

    const categorys = await GetCategory()

    return (
        <div>
            <div className="p-5 border-b border-black flex gap-10 items-center">
                <Button asChild>
                    <Link href={"/admin"}>
                        Voltar
                    </Link>
                </Button>
                <h2 className="text-2xl font-semibold">
                    Deletar <strong>Categorias</strong>
                </h2>
            </div>
            <div>
                {categorys.length <= 0
                    ?
                    <div className="flex justify-center items-center flex-col h-[70vh] gap-5">
                        <CircleSlash size={150} color="gray" />
                        <p className=" text-gray-500">
                            Não há categorias adicionadas.
                        </p>
                    </div>
                    :
                    (
                        <div>
                            {categorys.map((category) => (
                                <DeleteCategoryItem key={category.id} category={category} />
                            ))}
                        </div>
                    )}
            </div>
        </div>
    );
}

export default delete_categoryPage;

