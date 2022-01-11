import CLI from "../CLI";
import Arguments from "../Arguments";

const number = "number";
const category = "category";
const trueOrFalse = "trueOrFalse";
const difficulty = "difficulty";
const options = { number, category, trueOrFalse, difficulty };

jest.mock("../Arguments");

const mockParse = jest.fn();
jest.mock("commander", () => ({
  Option: jest.fn((a: string, b: string) => ({
    choices: jest.fn((c: string) => ({ default: jest.fn() })),
  })),
  Command: jest.fn(() => ({
    parse: mockParse,
    opts: jest.fn(() => options),
    addOption: jest.fn().mockReturnThis(),
  })),
}));

const args = ["Argument 1", "Argument 2", "Argument 3"];

describe("CLI", () => {
  it("'run' calls parse method on program", () => {
    // Given
    const cli = new CLI();
    // When
    cli.run(args);
    // Then
    expect(mockParse).toBeCalled();
  });

  it("'run' creates Arguments object correctly", () => {
    // Given
    const cli = new CLI();
    // When
    cli.run(args);
    // Then
    expect(Arguments).toBeCalledWith(number, category, trueOrFalse, difficulty);
  });
});
