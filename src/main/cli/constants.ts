const numberFlags = "-n, --number <number>";
const numberDescription = "number of questions";
const numberDefault = 10;

const categoryFlags = "-c, --category <number>";
const categoryDescription = "category code";

const difficultyFlags = "-d, --difficulty <difficulty>";
const difficultyDescription = "difficulty of the questions";
const difficultyOptions = ["easy", "medium", "hard"];
const difficultyDefault = "";
const difficultyDefaultDescription = "all";

const trueOrFalseFlags = "-t, --true-or-false";
const trueOrFalseDescription = "true-or-false questions";

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
