import QuestionFactory from "./main/questions";
import Quiz from "./main/Quiz";

var options = {
  host: "opentdb.com",
  path: "/api.php?amount=10&category=9&difficulty=easy&type=multiple",
};

main();

async function main() {
  const questions = await new QuestionFactory(options).getQuestions();
  const quiz = new Quiz(questions);
  quiz.play();
}
