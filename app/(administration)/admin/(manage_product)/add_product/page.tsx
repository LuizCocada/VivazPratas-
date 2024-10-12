import AddCategoryItem from "@/components/AdmAddProductCategoryItem";
import { Button } from "@/components/ui/button";
import { GetCategory } from "@/actions/get-category";
import Link from "next/link";

const add_productPage = async () => {

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
                    Adicionar <strong>Produtos</strong>
                </h2>
            </div>

            <div className="px-5 pt-3">
                <p>
                    Escolha à categoria que deseja adicionar o <strong>produto</strong>
                </p>
            </div>

            <div className="p-5 grid grid-cols-2 gap-5">
                {categorys.map((category) => (
                    <AddCategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

export default add_productPage;