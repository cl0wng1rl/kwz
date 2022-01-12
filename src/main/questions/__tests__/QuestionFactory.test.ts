import QuestionFactory from "../QuestionFactory";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import TrueOrFalseQuestion from "../TrueOrFalseQuestion";
import { Request } from "../../request";
import { readFileSync } from "fs";

const mockQuestions = readFileSync(__dirname + "/data/questions.json").toString();

jest.mock("../MultipleChoiceQuestion");
jest.mock("../TrueOrFalseQuestion");

const mockGet = jest.fn().mockReturnValue(mockQuestions);
jest.mock("../../request/Request", () => {
  return jest.fn().mockImplementation(() => ({
    get: mockGet,
  }));
});

beforeEach(() => {
  (<jest.Mock>MultipleChoiceQuestion).mockClear();
  (<jest.Mock>TrueOrFalseQuestion).mockClear();
  (<jest.Mock>Request).mockClear();
});

const questionArgs = (index: number) => [
  `QUESTION ${index}`,
  `CORRECT ${index}`,
  [`INCORRECT ${index} 0`, `INCORRECT ${index} 1`, `INCORRECT ${index} 2`],
];
const trueOrFalseQuestionArgs = (isTrue: boolean) => [`QUESTION`, isTrue];

const mockOptions = { host: "host", path: "path" };

describe("QuestionFactory", () => {
  it("calls 'get' on new Request correctly", async () => {
    // Given
    const questionFactory = new QuestionFactory(new Request(mockOptions));
    // When
    await questionFactory.getQuestions();
    // Then
    expect(mockGet).toBeCalled();
    expect(Request).toBeCalled();
  });

  it("creates new Questions correctly", async () => {
    // Given
    const questionFactory = new QuestionFactory(new Request(mockOptions));
    // When
    await questionFactory.getQuestions();
    // Then
    expect(MultipleChoiceQuestion).toBeCalledTimes(3);
    expect(MultipleChoiceQuestion).toBeCalledWith(...questionArgs(0));
    expect(MultipleChoiceQuestion).toBeCalledWith(...questionArgs(1));
    expect(MultipleChoiceQuestion).toBeCalledWith(...questionArgs(2));
    expect(TrueOrFalseQuestion).toBeCalledWith(...trueOrFalseQuestionArgs(true));
    expect(TrueOrFalseQuestion).toBeCalledWith(...trueOrFalseQuestionArgs(false));
  });
});
