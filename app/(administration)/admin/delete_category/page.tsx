import { GetCategory } from "@/actions/get-category";
import DeleteCategoryItem from "@/components/DeleteCategoryItem";


const delete_categoryPage = async () => {

    const categorys = await GetCategory()

    return (
        <div>
            {categorys.map((category) => (
                <DeleteCategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default delete_categoryPage;

