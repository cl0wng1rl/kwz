import Request from "./Request";
import Question from "./Question";

class QuestionFactory {
  private static QUESTION = "question";
  private static CORRECT_ANSWER = "correct_answer";
  private static INCORRECT_ANSWERS = "incorrect_answers";
  private static OPTIONS = {
    host: "opentdb.com",
    path: "/api.php?amount=10&category=9&difficulty=easy&type=multiple",
  };

  constructor() {}

  public async getQuestions(): Promise<Question[]> {
    const request = new Request(QuestionFactory.OPTIONS);
    const result = await request.get();
    const questionsJSON = JSON.parse(result).results;
    return questionsJSON.map(this.getQuestion);
  }

  private getQuestion(questionJSON: any): Question {
    return new Question(
      questionJSON[QuestionFactory.QUESTION],
      questionJSON[QuestionFactory.CORRECT_ANSWER],
      questionJSON[QuestionFactory.INCORRECT_ANSWERS]
    );
  }
}

export default QuestionFactory;
