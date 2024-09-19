import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


const CategoryItem = () => {
    return (
        <Link href={`/category/ID`}>
            <Card>
                <CardContent className="p-0">
                    <div className="relative h-[159px] w-full">
                        <Image className="object-cover rounded-xl" src={"/joia.png"} fill alt={"foto referente à categoria"} />
                    </div>

                    <div className="flex flex-col items-center p-3">
                        <h3 className="text-2xl font-semibold truncate">
                            Anéis
                        </h3>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default CategoryItem;