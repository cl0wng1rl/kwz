import CLI from "../cli";
import RequestFactory from "../request";
import { QuestionFactory } from "../questions";
import Quiz from "./Quiz";

class App {
  public async run(args: string[]) {
    const cliArgs = new CLI().run(args);
    const request = new RequestFactory().getQuestionRequest(cliArgs);
    const questions = await new QuestionFactory(request).getQuestions();
    const quiz = new Quiz(questions);
    quiz.play();
  }
}

export default App;
