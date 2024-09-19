import CategoryItem from "@/components/CategoryItem";
import Header from "@/components/Header";

//receber props


export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5">
        <div className="flex justify-center pt-10">
          <h2 className="text-3xl font-semibold">CATEGORIAS</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 overflow-y-auto pt-5">
          <CategoryItem />
        </div>
      </div>
    </>
  );
}
