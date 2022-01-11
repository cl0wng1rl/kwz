import RequestFactory from "../RequestFactory";
import Query, { Difficulty, QuestionType } from "../Query";
import QueryArguments from "../QueryArguments";
import { Arguments } from "../../cli";

jest.mock("../Query");
jest.mock("../../cli/Arguments");
jest.mock("../QueryArguments");

const numberOfQuestions = 1;
const categoryCode = 2;
const difficulty = Difficulty.Hard;
const questionType = QuestionType.TrueOrFalse;

const mockArguments = () => {
  (Arguments as jest.Mock).mockImplementation(() => ({
    number: numberOfQuestions,
    category: categoryCode,
    trueOrFalse: false,
    difficulty: Difficulty.Easy,
  }));
};

const mockDefaultArguments = () => {
  (Arguments as jest.Mock).mockImplementation(() => ({
    trueOrFalse: false,
    difficulty: "",
  }));
};

const mockQueryArguments = () => {
  (QueryArguments as jest.Mock).mockImplementation(() => ({
    numberOfQuestions: numberOfQuestions,
    categoryCode: categoryCode,
    difficulty: difficulty,
    questionType: questionType,
  }));
};

const getMockArguments = () =>
  new Arguments(numberOfQuestions, categoryCode, false, Difficulty.Easy);

describe("RequestFactory", () => {
  it("creates 'Request' correctly with set parameters", () => {
    // Given
    mockArguments();
    mockQueryArguments();
    const requestFactory = new RequestFactory();
    // When
    requestFactory.create(getMockArguments());
    // Then
    expect(Query).toBeCalledWith(numberOfQuestions, categoryCode, difficulty, questionType);
  });
});
