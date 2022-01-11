import RequestFactory from "../request";

type Category = { id: number; name: string };

class CategoryReader {
  public async print() {
    const request = new RequestFactory().getCategoryRequest();
    const categoryData = await request.get();
    const categoryJSON = JSON.parse(categoryData);
    const categories: Category[] = categoryJSON["trivia_categories"].map((data: any) => ({
      id: Number.parseInt(data["id"]),
      name: data["name"],
    }));
    categories.forEach((category) => console.log(`${category.name}: ${category.id}`));
  }
}

export default CategoryReader;
