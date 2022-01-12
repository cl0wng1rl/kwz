import { Request } from "../../request";
import CategoryReader from "../CategoryReader";

const mockPrintCategory = jest.fn();
jest.mock("../../display/Display", () => {
  return jest.fn().mockImplementation(() => ({
    printCategory: mockPrintCategory,
  }));
});

jest.mock("../../request/Request");

jest.mock("../../request/RequestFactory", () => {
  return jest.fn().mockImplementation(() => ({
    getCategoryRequest: jest.fn().mockReturnValue(new Request({ host: "", path: "" })),
  }));
});

const mockCategories = [{ id: 1, name: "name" }];
jest.mock("../CategoryFactory", () => {
  return jest.fn().mockImplementation(() => ({
    getCategories: jest.fn().mockReturnValue(mockCategories),
  }));
});

describe("CategoryReader", () => {
  it("'print' should call 'Display.print' correctly", async () => {
    // Given
    const reader = new CategoryReader();
    // When
    await reader.print();
    // Then
    expect(mockPrintCategory).toBeCalledWith("name", 1);
  });
});
