import useSWR from "swr";
import categoriesService, {
  CategoryType,
} from "../../../services/categoriesService";
import { PageSpinner } from "../../common/spinner";
import { ListCategoriesSlide } from "../listCategorySlide";

export const ListCategories = () => {
  const { data, error } = useSWR(
    "/listCategories",
    categoriesService.getCategory
  );
  if (error) return error;
  if (!data) {
    return <PageSpinner/>;
  }
  return (
    <>
      {data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
        />
      ))}
    </>
  );
};
