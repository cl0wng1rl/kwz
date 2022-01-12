import { Arguments } from "../cli";
import RequestFactory from "../request";
import { QuestionFactory } from "../questions";
import CategoryReader from "../categories/CategoryReader";
import Quiz from "./Quiz";

class App {
  public static async playQuiz(args: Arguments) {
    const request = new RequestFactory().getQuestionRequest(args);
    const questions = await new QuestionFactory(request).getQuestions();
    const quiz = new Quiz(questions);
    quiz.play();
  }

  public static async readCategories() {
    await new CategoryReader().print();
  }
}

export default App;
