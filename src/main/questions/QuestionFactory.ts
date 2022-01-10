import { Request } from "../request";
import Question from "./Question";

class QuestionFactory {
  private static readonly QUESTION = "question";
  private static readonly CORRECT_ANSWER = "correct_answer";
  private static readonly INCORRECT_ANSWERS = "incorrect_answers";

  constructor(private request: Request) {}

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
