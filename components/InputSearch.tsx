import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { Label } from "./ui/label";

const InputSearch = () => {
    return (
        <div className="flex items-center">
            <Input className="border-x-0 border-t-0 bg-background border-none rounded-none rounded-l-lg" placeholder="Buscar" />
            <Button variant={"hovercard"} className="p-3">
                <SearchIcon />
            </Button>
        </div>
    );
}

export default InputSearch;