import Query, { Difficulty, QuestionType } from "../Query";
import { Arguments } from "../../cli";
import QueryArguments from "../QueryArguments";
import Request from "../Request";

jest.mock("../Request");
jest.mock("../QueryArguments");

const expectedHost = "opentdb.com";
const amount = 1;
const categoryCode = 2;
const difficulty = Difficulty.Easy;
const questionType = QuestionType.Multiple;
const prefix = "/api.php?";
const expectedPathWithParameters = `${prefix}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}&type=${questionType}`;
const expectedPathWithoutParameters = `${prefix}amount=1`;

const mockQueryArguments = () => {
  (QueryArguments as jest.Mock).mockImplementation(() => ({
    numberOfQuestions: amount,
    categoryCode: categoryCode,
    difficulty: difficulty,
    questionType: questionType,
  }));
};
const mockDefaultQueryArguments = () => {
  (QueryArguments as jest.Mock).mockImplementation(() => ({
    numberOfQuestions: amount,
    categoryCode: 0,
    difficulty: Difficulty.Any,
    questionType: QuestionType.Any,
  }));
};
const getMockQueryArguments = () => new QueryArguments(<Arguments>new Object());

describe("Query", () => {
  it("'getRequest' returns correct request", async () => {
    // Given
    mockQueryArguments();
    const query = new Query(getMockQueryArguments());
    // When
    query.getRequest();
    // Then
    expect(Request).toBeCalledWith({ host: expectedHost, path: expectedPathWithParameters });
  });

  it("'getRequest' returns correct request without parameters", async () => {
    // Given
    mockDefaultQueryArguments();
    const query = new Query(getMockQueryArguments());
    // When
    query.getRequest();
    // Then
    expect(Request).toBeCalledWith({ host: expectedHost, path: expectedPathWithoutParameters });
  });
});
