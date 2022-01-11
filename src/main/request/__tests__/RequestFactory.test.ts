import { Arguments } from "../../cli";
import RequestFactory from "../RequestFactory";
import Request from "../Request";
import Query, { Difficulty, QuestionType } from "../Query";
import QueryArguments from "../QueryArguments";
import CONSTANTS from "../constants";

jest.mock("../../cli/Arguments");
jest.mock("../QueryArguments");
jest.mock("../Query");
jest.mock("../Request");

const numberOfQuestions = 1;
const categoryCode = 2;
const difficulty = Difficulty.Hard;
const questionType = QuestionType.TrueOrFalse;

const options = { host: "host", path: "path" };
const categoryOptions = { host: CONSTANTS.host, path: CONSTANTS.categoryAPI };

const mockArguments = () => {
  (Arguments as jest.Mock).mockImplementation(() => ({
    number: numberOfQuestions,
    category: categoryCode,
    trueOrFalse: false,
    difficulty: Difficulty.Easy,
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

const mockQuery = () => {
  (Query as unknown as jest.Mock).mockImplementation(() => ({
    getOptions: jest.fn(() => options),
  }));
};

const getMockArguments = () =>
  new Arguments(numberOfQuestions, categoryCode, false, Difficulty.Easy);

describe("RequestFactory", () => {
  it("'getQuestionRequest' creates 'Request' correctly with set parameters", () => {
    // Given
    mockArguments();
    mockQueryArguments();
    mockQuery();
    const requestFactory = new RequestFactory();
    // When
    requestFactory.getQuestionRequest(getMockArguments());
    // Then
    expect(Request).toBeCalledWith(options);
  });

  it("'getCategoryRequest' creates 'Request' correctly", () => {
    // Given
    const requestFactory = new RequestFactory();
    // When
    requestFactory.getCategoryRequest();
    // Then
    expect(Request).toBeCalledWith(categoryOptions);
  });
});
