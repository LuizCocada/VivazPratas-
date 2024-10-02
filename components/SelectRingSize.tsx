"use client"

import { ringSizes } from "@/constants/ringSizes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRouter } from "next/navigation";

const SelectRingSize = () => {
    const sizes = ringSizes()

    const router = useRouter()

    const handleSelectRingSize = (size: string) => {
        //desta forma podemos adicionar varios parametros na url após o ? sem remover o ja existente.
        const params = new URLSearchParams(window.location.search);// Captura os parâmetros atuais da URL
        params.set('ringsize', size);// Define o novo valor para o parâmetro `ringsize`
        router.push(`?${params.toString()}`); // Atualiza a URL com os novos parâmetros sem perder os anteriores
    }
    
    return (
        <Select onValueChange={handleSelectRingSize}>
            <SelectTrigger className="w-[100%] rounded-xl text-sm">
                <SelectValue placeholder="Selecionar" />
            </SelectTrigger>
            <SelectContent>
                {sizes.map((size) => (
                    <SelectItem key={size} value={size} onSelect={() => handleSelectRingSize(size)}>
                        {size}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default SelectRingSize;



