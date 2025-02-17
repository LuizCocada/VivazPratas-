import { GetCategory } from "@/actions/get-category";
import CategoryItem from "@/components/CategoryItem";
import Header from "@/components/Header";

const Home = async () => {

  const category = await GetCategory()

  return (
    <>
      <Header />
      {/* foto Banner*/}
      <div className="px-2 pt-5">
        <p className="text-sm font-semibold">Seja bem vindo à <strong>Vivaz Pratas</strong>!</p>
      </div>

      <div className="px-5 pb-10">
        <div className="flex justify-center pt-5">
          <h2 className="text-3xl font-semibold font-playfairDisplay">CATEGORIAS</h2>
        </div>

        <div className="flex flex-col gap-4 pt-5 font-playfairDisplay sm:grid grid-cols-2 md:grid-cols-3">
          {category.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home
