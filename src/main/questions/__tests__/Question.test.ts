import Question from "../Question";
// @ts-ignore

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0);
});

const statement: string = "statement";
const answer: string = "answer";
const others: string[] = ["other 1", "other 1", "other 1"];
const correctOption = "D";
const otherOptions = ["A", "B", "C"];

const expectedOptions = {
  A: others[0],
  B: others[1],
  C: others[2],
  D: answer,
};

describe("Question", () => {
  it("'isCorrect' only returns true for correct answer", async () => {
    // Given
    const question = new Question(statement, answer, others);
    // When, Then
    expect(question.isCorrect(correctOption)).toEqual(true);
    expect(question.isCorrect(otherOptions[0])).toEqual(false);
    expect(question.isCorrect(otherOptions[1])).toEqual(false);
    expect(question.isCorrect(otherOptions[2])).toEqual(false);
  });

  it("'statement' returns correct string", async () => {
    // Given
    const question = new Question(statement, answer, others);
    // When, Then
    expect(question.statement).toEqual(statement);
  });

  it("'options' returns correct object", async () => {
    // Given
    const question = new Question(statement, answer, others);
    // When, Then
    expect(question.options).toEqual(expectedOptions);
  });
});
