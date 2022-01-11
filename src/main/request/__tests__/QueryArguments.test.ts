import QueryArguments from "../QueryArguments";
import { Arguments } from "../../cli";

jest.mock("../../cli/Arguments");

const number = 1;
const category = 2;
const trueOrFalse = true;
const difficulty = "hard";
const booleanType = "boolean";

const expectedDefaultNumber = 10;
const expectedDefaultCategory = 9;
const expectedDefaultDifficulty = "";
const expectedDefaultType = "multiple";

const mockArguments = () => {
  (Arguments as jest.Mock).mockImplementation(() => ({
    number: number,
    category: category,
    trueOrFalse: trueOrFalse,
    difficulty: difficulty,
  }));
};

const mockDefaultArguments = () => {
  (Arguments as jest.Mock).mockImplementation(() => ({}));
};

const getMockArguments = () => new Arguments(number, category, trueOrFalse, difficulty);

describe("QueryArguments", () => {
  it("'numberOfQuestions' returns correct value", () => {
    mockArguments();
    // Given
    const args = new QueryArguments(getMockArguments());
    // When
    const actualNumber = args.numberOfQuestions;
    // Then
    expect(actualNumber).toEqual(number);
  });

  it("'categoryCode' returns correct value", () => {
    mockArguments();
    // Given
    const args = new QueryArguments(getMockArguments());
    // When
    const actualCategory = args.categoryCode;
    // Then
    expect(actualCategory).toEqual(category);
  });

  it("'questionType' returns correct value", () => {
    mockArguments();
    // Given
    const args = new QueryArguments(getMockArguments());
    // When
    const actualType = args.questionType;
    // Then
    expect(actualType).toEqual(booleanType);
  });

  it("'difficulty' returns correct value", () => {
    mockArguments();
    // Given
    const args = new QueryArguments(getMockArguments());
    // When
    const actualDifficulty = args.difficulty;
    // Then
    expect(actualDifficulty).toEqual(difficulty);
  });

  it("fields are correct when no default values are given", () => {
    mockDefaultArguments();
    // Given
    const args = new QueryArguments(getMockArguments());
    // When
    const actualDefaultNumber = args.numberOfQuestions;
    const actualDefaultCategory = args.categoryCode;
    const actualDefaultDifficulty = args.difficulty;
    const actualDefaultType = args.questionType;
    // Then
    expect(actualDefaultNumber).toEqual(expectedDefaultNumber);
    expect(actualDefaultCategory).toEqual(expectedDefaultCategory);
    expect(actualDefaultDifficulty).toEqual(expectedDefaultDifficulty);
    expect(actualDefaultType).toEqual(expectedDefaultType);
  });
});
