"use client"

import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

const formSchema = z.object({
    title: z.string().trim().min(1, {
        message: "Digite algo para buscar"
    }),
})


const InputSearch = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    })

    const router = useRouter()

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push(`/category?title=${data.title}`) //make route
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex items-center">
                <div className="flex w-full">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl> 
                                    <Input className="border-x-0 border-t-0 bg-background border-none rounded-none rounded-l-lg "
                                        placeholder="Buscar por produto"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={"hovercard"} className="p-3 rounded-l-none">
                        <SearchIcon />
                    </Button>
                </div>
            </form>
        </Form>
    );
}

export default InputSearch;
