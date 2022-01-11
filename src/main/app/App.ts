import { Arguments } from "../cli";
import RequestFactory from "../request";
import { QuestionFactory } from "../questions";
import Quiz from "./Quiz";

class App {
  public async run(args: Arguments) {
    const request = new RequestFactory().getQuestionRequest(args);
    const questions = await new QuestionFactory(request).getQuestions();
    const quiz = new Quiz(questions);
    quiz.play();
  }
}

export default App;
