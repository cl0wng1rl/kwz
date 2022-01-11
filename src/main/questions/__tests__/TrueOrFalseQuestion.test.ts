import TrueOrFalseQuestion from "../TrueOrFalseQuestion";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0);
});

const statement: string = "statement";
const options = { A: "A", B: "B" };

const expectedOptions = { A: "True", B: "False" };

describe("TrueOrFalseQuestion", () => {
  it("'isCorrect' only returns true for correct answer", async () => {
    // Given
    const question = new TrueOrFalseQuestion(statement, true);
    // When, Then
    expect(question.isCorrect(options.A)).toEqual(true);
    expect(question.isCorrect(options.B)).toEqual(false);
  });

  it("'statement' returns correct string", async () => {
    // Given
    const question = new TrueOrFalseQuestion(statement, true);
    // When, Then
    expect(question.statement).toEqual(statement);
  });

  it("'options' returns correct object", async () => {
    // Given
    const question = new TrueOrFalseQuestion(statement, true);
    // When, Then
    expect(question.options).toEqual(expectedOptions);
  });

  it("'answer' returns correct answer when true", async () => {
    // Given
    const question = new TrueOrFalseQuestion(statement, true);
    // When, Then
    expect(question.answer).toEqual(expectedOptions.A);
  });

  it("'answer' returns correct answer when false", async () => {
    // Given
    const question = new TrueOrFalseQuestion(statement, false);
    // When, Then
    expect(question.answer).toEqual(expectedOptions.B);
  });
});
