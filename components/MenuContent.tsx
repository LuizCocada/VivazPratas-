import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
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
                    LogoVivaz
                </SheetTitle>
            </SheetHeader>

            <div className="px-5 py-3 flex flex-col gap-7 flex-1">
                {/* <SheetClose asChild>
                    <Link href={"/"} className="text-sm font-semibold border-b pb-2">
                        Promoções
                    </Link>
                </SheetClose>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="pb-2 pt-0">Alianças</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="pb-2 pt-0">Anéis</AccordionTrigger>
                        <AccordionContent >
                        </AccordionContent>
                    </AccordionItem>
                </Accordion> */}

                {categorys.map((category) => (
                    <MenuCategoryItem key={category.id} category={category} />
                ))}
            </div>

            <div className="p-5 flex justify-around underline">
                <Link href={`https://wa.me/5585999295393`} target="_blank" className="flex items-center gap-1">
                    <PersonIcon />
                    <p>Contato</p>
                </Link>
                <Link href={`https://wa.me/5585988332945?text=Olá, pode esclarecer minhas dúvidas sobre à VivazPratas?`} target="_blank">
                    <p>Dúvidas</p>
                </Link>
            </div>
        </SheetContent>
    );
}

export default MenuContent;