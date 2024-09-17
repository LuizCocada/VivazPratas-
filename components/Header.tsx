import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import Link from "next/link";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <Card className="rounded-none border-none">
            <CardContent className="p-5 items-center flex justify-between">
                <Link href={"/"}>
                    <Image className="border rounded-full " width={65} height={65} src={"/logo.png"} alt={"logo"} />
                </Link>
                <div className="flex-1 px-5">
                    <Input className="rounded p-5" placeholder="Buscar por produto" />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size={"icon"}>
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    {/* Criar component MenuContent */}
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;
