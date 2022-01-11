const numberFlags = "-n, --number <number>";
const numberDescription = "Number of questions";
const numberDefault = 10;

const categoryFlags = "-c, --category <number>";
const categoryDescription = "Category code";

const difficultyFlags = "-d, --difficulty <difficulty>";
const difficultyDescription = "Difficulty of the questions";
const difficultyOptions = ["easy", "medium", "hard"];
const difficultyDefault = "";
const difficultyDefaultDescription = "Difficulty of the questions";

const trueOrFalseFlags = "-t, --true-or-false";
const trueOrFalseDescription = "True-or-False questions";

const CONSTANTS = {
  numberFlags,
  numberDescription,
  numberDefault,
  categoryFlags,
  categoryDescription,
  difficultyFlags,
  difficultyDescription,
  difficultyOptions,
  difficultyDefault,
  difficultyDefaultDescription,
  trueOrFalseFlags,
  trueOrFalseDescription,
};

export default CONSTANTS;
