import CLI from "./main/cli";
import RequestFactory from "./main/request";
import { QuestionFactory } from "./main/questions";
import Quiz from "./main/Quiz";

main();

async function main() {
  const args = new CLI().run(process.argv);
  const request = new RequestFactory().getQuestionRequest(args);
  const questions = await new QuestionFactory(request).getQuestions();
  const quiz = new Quiz(questions);
  quiz.play();
}
