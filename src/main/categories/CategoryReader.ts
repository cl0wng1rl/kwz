import RequestFactory from "../request";
import CategoryFactory, { Category } from "./CategoryFactory";

class CategoryReader {
  public async print() {
    const request = new RequestFactory().getCategoryRequest();
    const categories = await new CategoryFactory(request).getCategories();
    categories.forEach(CategoryReader.printCategory);
  }

  private static printCategory(category: Category) {
    console.log(`${category.name}: ${category.id}`);
  }
}

export default CategoryReader;
