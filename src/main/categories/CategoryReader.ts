import RequestFactory from "../request";
import Display from "../display";
import CategoryFactory, { Category } from "./CategoryFactory";

class CategoryReader {
  private static display: Display;

  constructor() {
    CategoryReader.display = new Display();
  }

  public async print() {
    const request = new RequestFactory().getCategoryRequest();
    const categories = await new CategoryFactory(request).getCategories();
    categories.forEach(CategoryReader.printCategory);
  }

  private static printCategory(category: Category) {
    CategoryReader.display.printCategory(category.name, category.id);
  }
}

export default CategoryReader;
