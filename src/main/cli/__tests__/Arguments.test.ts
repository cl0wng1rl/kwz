import Arguments from "../Arguments";

const number = 1;
const category = 2;
const trueOrFalse = true;
const difficulty = "hard";

describe("Arguments", () => {
  it("'number' returns correct value", () => {
    // Given
    const args = new Arguments(number, category, trueOrFalse, difficulty);
    // When
    const actualNumber = args.number;
    // Then
    expect(actualNumber).toEqual(number);
  });

  it("'category' returns correct value", () => {
    // Given
    const args = new Arguments(number, category, trueOrFalse, difficulty);
    // When
    const actualCategory = args.category;
    // Then
    expect(actualCategory).toEqual(category);
  });

  it("'trueOrFalse' returns correct value", () => {
    // Given
    const args = new Arguments(number, category, trueOrFalse, difficulty);
    // When
    const actualTrueOrFalse = args.trueOrFalse;
    // Then
    expect(actualTrueOrFalse).toEqual(trueOrFalse);
  });

  it("'difficulty' returns correct value", () => {
    // Given
    const args = new Arguments(number, category, trueOrFalse, difficulty);
    // When
    const actualDifficulty = args.difficulty;
    // Then
    expect(actualDifficulty).toEqual(difficulty);
  });
});
