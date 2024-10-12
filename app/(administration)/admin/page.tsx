"use client";

import MenuContent from "@/components/MenuContent";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Ainda carregando
    if (!session) router.push("/admin/login"); // Redireciona se não autenticado
  }, [session, status, router]);

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div className="border-b border-black p-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Painel de Administração</h1>
          <p className="text-gray-600">Bem vindo, {session?.user?.name}</p>
        </div>

        <button onClick={() => signOut()} className="px-3 py-2 bg-red-500 text-white rounded">
          Sair
        </button>
      </div>


      <div className="flex justify-center items-center h-[70vh]">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"link"} className="border-none p-10 bg-gray-200 hover:bg-gray-300">
              <MenuIcon size={60} />
            </Button>
          </SheetTrigger>
          <SheetContent className="min-w-[80%]">
            <SheetHeader>
              <SheetTitle className="border-b-2 font-semibold text-xl">Menu de gerenciamento</SheetTitle>
            </SheetHeader>

            <div className="p-5 space-y-3">
              <SheetClose asChild>
                <Button asChild>
                  <Link href={"/admin/create_category"} className="w-full font-semibold">
                    Criar Categoria
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild>
                  <Link href={"/admin/delete_category"} className="w-full font-semibold">
                    Deletar Categoria
                  </Link>
                </Button>
              </SheetClose>

              <div className="border-b"></div>

              <SheetClose asChild>
                <Button asChild>
                  <Link href={"/admin/add_product"} className="w-full font-semibold">
                    Adicionar Produto
                  </Link>
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button asChild>
                  <Link href={"/admin/delete_product"} className="w-full font-semibold">
                    Remover Produto
                  </Link>
                </Button>
              </SheetClose>

            </div>

          </SheetContent>
        </Sheet>
      </div>



    </div>
  );
};

export default AdminPage;
