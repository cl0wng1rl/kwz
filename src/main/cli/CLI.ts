import { Command, Option } from "commander";
import CONSTANTS from "./constants";
import App from "../app";

const numberOption = new Option(CONSTANTS.numberFlags, CONSTANTS.numberDescription);
const categoryOption = new Option(CONSTANTS.categoryFlags, CONSTANTS.categoryDescription);
const trueOrFalseOption = new Option(CONSTANTS.trueOrFalseFlags, CONSTANTS.trueOrFalseDescription);
const difficultyOption = new Option(CONSTANTS.difficultyFlags, CONSTANTS.difficultyDescription)
  .choices(CONSTANTS.difficultyOptions)
  .default(CONSTANTS.difficultyDefault, CONSTANTS.difficultyDefaultDescription);

class CLI {
  public run(args: string[]) {
    const program = this.createCommand();
    program.action(App.playQuiz);
    program.addCommand(this.createCategoriesCommand());

    program.parse(args);
  }

  private createCommand(): Command {
    return new Command()
      .addOption(numberOption)
      .addOption(categoryOption)
      .addOption(trueOrFalseOption)
      .addOption(difficultyOption);
  }

  private createCategoriesCommand(): Command {
    return new Command()
      .name(CONSTANTS.categoriesCommand)
      .description(CONSTANTS.categoriesCommandDescription)
      .action(App.readCategories);
  }
}

export default CLI;
