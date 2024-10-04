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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"link"} className="border-none">
              <MenuIcon size={30} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="border-b border-black">Menu de gerenciamento</SheetTitle>
            </SheetHeader>

            <div className="p-5">
              <SheetClose asChild>
                <Button asChild>
                  <Link href={"/admin/create_category"} className="w-full">
                    Criar Categoria
                  </Link>
                </Button>
              </SheetClose>
            </div>

          </SheetContent>
        </Sheet>
      </div>






      <button onClick={() => signOut()} className="px-3 py-2 bg-red-500 text-white rounded">
        Sair
      </button>
    </div>
  );
};

export default AdminPage;
