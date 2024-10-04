'use client'

import { Button } from "@/components/ui/button"
import { createCategory } from "@/server/actions/create-category"
import Link from "next/link"
import { useState } from "react"



const create_category = () => {

    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    const handleCreateCategory = async () => {
        try {
            await createCategory({
                name: category,
                imageUrl: image
            })
        }
        catch (error) {
            console.log(error, "error ao criar categoria")
        }
    }

    return (
        <>
            <div className="p-5 border-b border-black flex gap-10 items-center">
                <Button asChild>
                    <Link href={"/admin"}>
                        Voltar
                    </Link>
                </Button>
                <h2 className="text-2xl font-semibold">
                    Criar <strong>Categorias</strong>
                </h2>
            </div>

            <div className="p-5">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category">Categoria</label>
                        <input type="text"
                            id="category"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Nome"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
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
                        <button className="p-2 bg-black text-white rounded" onClick={(handleCreateCategory)}>Criar</button>
                    </div>
                </form>
            </div>

        </>
    )

}

export default create_category







{/* mudar formato no banco de string para BYTEA para salvar arquivos de imagens */ }
{/* <div className="flex flex-col gap-2">
                        <label htmlFor="image">Imagem</label>
                        <input type="file" id="image" className="p-2 border border-gray-300 rounded" />
                    </div> */}