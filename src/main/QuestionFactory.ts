import Request, { Options } from "./Request";
import Question from "./Question";

class QuestionFactory {
  private static QUESTION = "question";
  private static CORRECT_ANSWER = "correct_answer";
  private static INCORRECT_ANSWERS = "incorrect_answers";

  private request: Request;

  constructor(options: Options) {
    this.request = new Request(options);
  }

  public async getQuestions(): Promise<Question[]> {
    const result = await this.request.get();
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
