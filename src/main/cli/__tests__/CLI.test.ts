import CLI from "../CLI";

const number = "number";
const category = "category";
const trueOrFalse = "trueOrFalse";
const difficulty = "difficulty";
const options = { number, category, trueOrFalse, difficulty };

jest.mock("../../categories/CategoryReader", () => ({ print: jest.fn() }));

jest.mock("../../app/App", () => ({
  playQuiz: jest.fn(),
  readCategories: jest.fn(),
}));

const mockParse = jest.fn();
jest.mock("commander", () => ({
  Option: jest.fn((a: string, b: string) => ({
    choices: jest.fn((c: string) => ({ default: jest.fn() })),
  })),
  Command: jest.fn(() => ({
    parseAsync: mockParse,
    opts: jest.fn(() => options),
    action: jest.fn().mockReturnThis(),
    addOption: jest.fn().mockReturnThis(),
    addCommand: jest.fn().mockReturnThis(),
    name: jest.fn().mockReturnThis(),
    description: jest.fn().mockReturnThis(),
  })),
}));

const args = ["Argument 1", "Argument 2", "Argument 3"];

describe("CLI", () => {
  it("'run' calls parse method on program", async () => {
    // Given
    const cli = new CLI();
    // When
    await cli.run(args);
    // Then
    expect(mockParse).toBeCalled();
  });
});
