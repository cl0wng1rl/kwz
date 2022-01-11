import { Command, Option, OptionValues } from "commander";
import CONSTANTS from "./constants";

const numberOption = new Option(CONSTANTS.numberFlags, CONSTANTS.numberDescription);
const categoryOption = new Option(CONSTANTS.categoryFlags, CONSTANTS.categoryDescription);
const trueOrFalseOption = new Option(CONSTANTS.trueOrFalseFlags, CONSTANTS.trueOrFalseDescription);
const difficultyOption = new Option(CONSTANTS.difficultyFlags, CONSTANTS.difficultyDescription)
  .choices(CONSTANTS.difficultyOptions)
  .default(CONSTANTS.difficultyDefault, CONSTANTS.difficultyDefaultDescription);

class Arguments {
  constructor(
    private _number: number | undefined,
    private _category: number | undefined,
    private _trueOrFalse: boolean,
    private _difficulty: string
  ) {}

  get number(): number | undefined {
    return this._number;
  }
  get category(): number | undefined {
    return this._category;
  }
  get trueOrFalse(): boolean {
    return this._trueOrFalse;
  }
  get difficulty(): string {
    return this._difficulty;
  }
}

class CLI {
  public run(args: string[]): Arguments {
    const program = this.createCommand();
    program.parse(args);
    return this.getArguments(program.opts());
  }

  private getArguments(options: OptionValues): Arguments {
    return new Arguments(options.number, options.category, options.trueOrFalse, options.difficulty);
  }

  private createCommand(): Command {
    return new Command()
      .addOption(numberOption)
      .addOption(categoryOption)
      .addOption(trueOrFalseOption)
      .addOption(difficultyOption);
  }
}

export default CLI;
