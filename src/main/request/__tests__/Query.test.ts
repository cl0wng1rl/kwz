import Query, { Difficulty, QuestionType } from "../Query";
import Request from "../Request";

jest.mock("../Request");

const expectedHost = "opentdb.com";
const amount = 1;
const categoryCode = 2;
const difficulty = Difficulty.Easy;
const questionType = QuestionType.Multiple;
const prefix = "/api.php?";
const expectedPathWithParameters = `${prefix}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}&type=${questionType}`;
const expectedPathWithoutParameters = `${prefix}amount=1`;

describe("Query", () => {
  it("'getRequest' returns correct request", async () => {
    // Given
    const query = new Query(amount, categoryCode, difficulty, questionType);
    // When
    const request = query.getRequest();
    // Then
    expect(Request).toBeCalledWith({ host: expectedHost, path: expectedPathWithParameters });
  });

  it("'getRequest' returns correct request without parameters", async () => {
    // Given
    const query = new Query(amount, 0, Difficulty.Any, QuestionType.Any);
    // When
    const request = query.getRequest();
    // Then
    expect(Request).toBeCalledWith({ host: expectedHost, path: expectedPathWithoutParameters });
  });
});
