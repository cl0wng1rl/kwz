import RequestBuilder from "../RequestBuilder";
import Query, { Difficulty, QuestionType } from "../Query";

jest.mock("../Query");

const numberOfQuestions = 1;
const categoryCode = 2;
const difficulty = Difficulty.Hard;
const questionType = QuestionType.TrueOrFalse;

const defaultNumberOfQuestions = 10;
const defaultCategoryCode = 9;
const defaultDifficulty = Difficulty.Easy;
const defaultQuestionType = QuestionType.Multiple;

describe("RequestBuilder", () => {
  it("creates 'Request' correctly with set parameters", () => {
    // Given
    const requestBuilder = new RequestBuilder();
    // When
    requestBuilder
      .withNumberOfQuestions(numberOfQuestions)
      .withCategoryCode(categoryCode)
      .withDifficulty(difficulty)
      .withQuestionType(questionType)
      .build();
    // Then
    expect(Query).toBeCalledWith(numberOfQuestions, categoryCode, difficulty, questionType);
  });

  it("creates 'Request' correctly with no set parameters", () => {
    // Given
    const requestBuilder = new RequestBuilder();
    // When
    requestBuilder.build();
    // Then
    expect(Query).toBeCalledWith(
      defaultNumberOfQuestions,
      defaultCategoryCode,
      defaultDifficulty,
      defaultQuestionType
    );
  });
});
