import Query, { Difficulty, QuestionType } from "./Query";
import Request from "./Request";

class RequestBuilder {
  private numberOfQuestions: number = 10;
  private categoryCode: number = 9;
  private difficulty: Difficulty = Difficulty.Easy;
  private questionType: QuestionType = QuestionType.Multiple;

  public withNumberOfQuestions(numberOfQuestions: number): RequestBuilder {
    this.numberOfQuestions = numberOfQuestions;
    return this;
  }

  public withCategoryCode(categoryCode: number): RequestBuilder {
    this.categoryCode = categoryCode;
    return this;
  }

  public withDifficulty(difficulty: Difficulty): RequestBuilder {
    this.difficulty = difficulty;
    return this;
  }

  public withQuestionType(questionType: QuestionType): RequestBuilder {
    this.questionType = questionType;
    return this;
  }

  public build(): Request {
    const query = new Query(
      this.numberOfQuestions,
      this.categoryCode,
      this.difficulty,
      this.questionType
    );
    return query.getRequest();
  }
}

export default RequestBuilder;
