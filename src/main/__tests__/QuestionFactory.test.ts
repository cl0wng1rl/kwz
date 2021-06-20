import QuestionFactory from "../QuestionFactory";
import Question from "../Question";
// @ts-ignore
import Request, { mockGet } from "../Request";

jest.mock("../Question");
jest.mock("../Request");

beforeEach(() => {
  (<jest.Mock>Question).mockClear();
  (<jest.Mock>Request).mockClear();
  (<jest.Mock>mockGet).mockClear();
});

const questionArgs = (index: number) => [
  `QUESTION ${index}`,
  `CORRECT ${index}`,
  [`INCORRECT ${index} 0`, `INCORRECT ${index} 1`, `INCORRECT ${index} 2`],
];

const mockOptions = {host: "host", path: "path"};

describe("QuestionFactory", () => {
  it("calls 'get' on new Request correctly", async () => {
    // Given
    const questionFactory = new QuestionFactory(mockOptions);
    // When
    await questionFactory.getQuestions();
    // Then
    expect(mockGet).toBeCalled();
    expect(Request).toBeCalled();
  });

  it("creates new Questions correctly", async () => {
    // Given
    const questionFactory = new QuestionFactory(mockOptions);
    // When
    await questionFactory.getQuestions();
    // Then
    expect(Question).toBeCalledTimes(3);
    expect(Question).toBeCalledWith(...questionArgs(0));
    expect(Question).toBeCalledWith(...questionArgs(1));
    expect(Question).toBeCalledWith(...questionArgs(2));
  });
});
