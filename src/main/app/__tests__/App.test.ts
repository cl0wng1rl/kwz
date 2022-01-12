import App from "../App";
import { Arguments } from "../../cli";

jest.mock("../../request/RequestFactory", () => {
  return jest.fn().mockImplementation(() => ({
    getQuestionRequest: jest.fn().mockImplementation((args: string[]) => ({})),
  }));
});

jest.mock("../../questions/QuestionFactory", () => {
  return jest.fn().mockImplementation(() => ({
    getQuestions: jest.fn().mockImplementation(() => []),
  }));
});

const mockPlay = jest.fn();
jest.mock("../Quiz", () => {
  return jest.fn().mockImplementation((q: []) => ({
    play: mockPlay,
  }));
});

const mockPrint = jest.fn();
jest.mock("../../categories/CategoryReader", () => {
  return jest.fn().mockImplementation(() => ({
    print: mockPrint,
  }));
});

jest.mock("../../cli/Arguments");

describe("App", () => {
  it("'playQuiz' calls 'Quiz.play'", async () => {
    // Given, When
    await App.playQuiz(new Arguments(0, 0, false, ""));
    // Then
    expect(mockPlay).toBeCalled();
  });

  it("'readCategories' calls 'CategoryReader.read'", async () => {
    // Given, When
    await App.readCategories();
    // Then
    expect(mockPrint).toBeCalled();
  });
});
