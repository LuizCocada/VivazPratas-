"use client";

import { useSession, signOut } from "next-auth/react";
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
    <div className="p-6">
      <h1 className="text-2xl mb-4">Painel Administrativo</h1>
      {/* Aqui você pode adicionar componentes para gerenciar categorias e produtos */}
      <button onClick={() => signOut()} className="px-3 py-2 bg-red-500 text-white rounded">
        Sair
      </button>
    </div>
  );
};

export default AdminPage;
