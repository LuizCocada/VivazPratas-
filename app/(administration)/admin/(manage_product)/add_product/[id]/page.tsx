"use client"
import { addProduct } from "@/actions/add-product";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface add_productActionPageParams {
    params: {
        id: string
    }
}

const Add_productActionPage = ({ params }: add_productActionPageParams) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const setNullOnSubmit = () => {
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
    }


    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await addProduct({
                categoryId: params.id,
                name,
                description,
                price,
                image
            });
            setNullOnSubmit();
            toast.success("Produto adicionado com sucesso");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao adicionar produto");
        }
    }

    return (
        <div>
            <div>
                <div className="p-5 border-b border-black flex gap-10 items-center">
                    <Button asChild>
                        <Link href={"/admin/add_product"}>
                            Voltar
                        </Link>
                    </Button>
                    <h2 className="text-2xl font-semibold">
                        Adicionar <strong>Produto</strong>
                    </h2>
                </div>
            </div>

            <div className="p-5">
                <form className="flex flex-col gap-4" onSubmit={handleAddProduct}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nome</label>
                        <input type="text"
                            id="name"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description">Descrição</label>
                        <input type="text"
                            id="description"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Descrição"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="price">Preço</label>
                        <input type="text"
                            id="price"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Preço"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="image">Imagem</label>
                        <input type="text"
                            id="image"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>


                    <div className="flex flex-col gap-2">
                        <button type="submit" className="p-2 bg-black text-white rounded">Adicionar Produto</button>
                    </div>
                </form>
            </div>

        </div>
    );
}



export default Add_productActionPage;