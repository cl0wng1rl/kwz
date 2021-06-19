import Request from './main/Request';
import QuestionFactory from './main/QuestionFactory';
var options = {
  host: 'opentdb.com',
  path: '/api.php?amount=10&category=9&difficulty=easy&type=multiple'
};
const request = new Request(options);
new QuestionFactory(request).getQuestions().then(questions => {
  questions.forEach(q => console.log(q));
});