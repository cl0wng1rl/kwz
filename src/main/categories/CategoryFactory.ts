import { Request } from "../request";

export type Category = { id: number; name: string };

class CategoryFactory {
  constructor(private request: Request) {}

  public async getCategories(): Promise<Category[]> {
    const result = await this.request.get();
    const categoriesJSON = JSON.parse(result).trivia_categories;
    return categoriesJSON.map((data: any) => this.getCategory(data));
  }

  private getCategory(data: any): Category {
    return { id: Number.parseInt(data.id), name: data.name };
  }
}

export default CategoryFactory;
