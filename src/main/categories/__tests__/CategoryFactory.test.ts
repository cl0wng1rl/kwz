import { Request } from "../../request";
import CategoryFactory from "../CategoryFactory";

import { readFileSync } from "fs";

const categoriesJSON = readFileSync(__dirname + "/data/categories.json");
jest.mock("../../request/Request", () => {
  return jest.fn().mockImplementation(() => ({
    get: jest.fn().mockReturnValue(categoriesJSON),
  }));
});

const expectedCategories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
];

describe("CategoryFactory", () => {
  it("'getCategories' should return correct categories", async () => {
    // Given
    const factory = new CategoryFactory(new Request({ host: "", path: "" }));
    // When
    const categories = await factory.getCategories();
    // Then
    expect(categories).toEqual(expectedCategories);
  });
});
