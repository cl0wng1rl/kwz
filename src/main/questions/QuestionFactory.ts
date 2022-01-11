import { Request } from "../request";
import Question from "./Question";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueOrFalseQuestion from "./TrueOrFalseQuestion";

class QuestionFactory {
  private static readonly QUESTION = "question";
  private static readonly CORRECT_ANSWER = "correct_answer";
  private static readonly INCORRECT_ANSWERS = "incorrect_answers";
  private static readonly TYPE = "type";
  private static readonly MULTIPLE_CHOICE = "multiple";
  private static readonly TRUE = "True";

  constructor(private request: Request) {}

  public async getQuestions(): Promise<Question[]> {
    const result = await this.request.get();
    const questionsJSON = JSON.parse(result).results;
    return questionsJSON.map((data: any) => this.getQuestion(data));
  }

  private getQuestion(data: any): Question {
    if (this.isMultipleChoice(data)) return this.getMultipleChoiceQuestion(data);
    return this.getTrueOrFalseQuestion(data);
  }

  private isMultipleChoice(data: any): boolean {
    return data[QuestionFactory.TYPE] === QuestionFactory.MULTIPLE_CHOICE;
  }

  private getMultipleChoiceQuestion(data: any): MultipleChoiceQuestion {
    return new MultipleChoiceQuestion(
      data[QuestionFactory.QUESTION],
      data[QuestionFactory.CORRECT_ANSWER],
      data[QuestionFactory.INCORRECT_ANSWERS]
    );
  }

  private getTrueOrFalseQuestion(data: any): TrueOrFalseQuestion {
    return new TrueOrFalseQuestion(
      data[QuestionFactory.QUESTION],
      data[QuestionFactory.CORRECT_ANSWER] === QuestionFactory.TRUE
    );
  }
}

export default QuestionFactory;
