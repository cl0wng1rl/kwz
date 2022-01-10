import RequestBuilder from "./main/request";
import QuestionFactory from "./main/questions";
import Quiz from "./main/Quiz";

main();

async function main() {
  const request = new RequestBuilder().build();
  const questions = await new QuestionFactory(request).getQuestions();
  const quiz = new Quiz(questions);
  quiz.play();
}
