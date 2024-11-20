import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { db } from "@/lib/prisma";
import MenuCategoryItem from "./MenuCategoryItem";
import { PersonIcon } from "@radix-ui/react-icons";

const MenuContent = async () => {

    const categorys = await db.category.findMany({});


    return (
        <SheetContent className="font-playfairDisplay flex flex-col h-full p-0">
            <SheetHeader className="border-b p-5">
                {/* Logo foto vivaz */}
                <SheetTitle className="text-left">
                    Vivaz Pratas
                </SheetTitle>
            </SheetHeader>

            <div className="px-5 py-3 flex flex-col gap-7 flex-1">

                {categorys.map((category) => (
                    <MenuCategoryItem key={category.id} category={category} />
                ))}
            </div>

            <div className="p-5 flex justify-around underline">
                <Link href={`https://wa.me/5585994517813`} className="flex items-center gap-1" target="_blank">
                    <PersonIcon />
                    <p>Contato</p>
                </Link>
                <Link href={`https://wa.me/5585994517813?text=Olá, pode esclarecer minhas dúvidas sobre à VivazPratas?`} target="_blank">
                    <p>Dúvidas</p>
                </Link>
            </div>
        </SheetContent>
    );
}

export default MenuContent;