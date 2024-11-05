import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import Link from "next/link";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import MenuContent from "./MenuContent";
import InputSearch from "./InputSearch";

const Header = () => {
    return (
        <Card className="rounded-none border-none">
            <CardContent className="p-5 items-center flex justify-between">
                <Link href={"/"}>
                    <Image className="rounded-full " width={65} height={65} src={"/logo.png"} alt={"logo"} />
                </Link>
                <div className="flex-1 px-5">
                    <InputSearch />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size={"icon"} variant={"link"} className="rounded-none">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <MenuContent />
                    {/* Criar component MenuContent */}
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;
