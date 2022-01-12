import TrueOrFalseQuestion from "../../questions/TrueOrFalseQuestion";
import Quiz from "../Quiz";

const mockPrintQuestion = jest.fn();
const mockPrintResponse = jest.fn();
const mockPrintScore = jest.fn();
jest.mock("../../display/Display", () => {
  return jest.fn().mockImplementation(() => ({
    printQuestion: mockPrintQuestion,
    printResponse: mockPrintResponse,
    printScore: mockPrintScore,
  }));
});

jest.mock("../../questions/TrueOrFalseQuestion", () => {
  return jest.fn().mockImplementation((statement, isCorrect) => ({
    statement: statement,
    options: { A: "True", B: "False" },
    answer: "answer",
    isCorrect: jest.fn(() => isCorrect),
  }));
});

jest.mock("../Player", () => {
  return jest.fn().mockImplementation(() => ({ ask: jest.fn(() => "answer") }));
});

const getMockQuestion = (isCorrect: boolean) => new TrueOrFalseQuestion("statement", isCorrect);

describe("Quiz", () => {
  it("'play' should print statement, options and response", () => {
    // Given
    const questions = new Array(3).fill(getMockQuestion(true));
    questions.push(getMockQuestion(false));
    const quiz = new Quiz(questions);
    // When
    quiz.play();
    // Then
    questions.forEach((q) => expect(mockPrintQuestion).toBeCalledWith(q));
    expect(mockPrintResponse).toHaveBeenNthCalledWith(1, true, "answer");
    expect(mockPrintResponse).toHaveBeenNthCalledWith(2, true, "answer");
    expect(mockPrintResponse).toHaveBeenNthCalledWith(3, true, "answer");
    expect(mockPrintResponse).toHaveBeenNthCalledWith(4, false, "answer");
    expect(mockPrintScore).toBeCalledWith(3, 4);
  });
});
