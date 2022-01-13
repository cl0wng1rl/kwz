import Display from "../display";
import { question } from "readline-sync";
class Player {
  private static display: Display;

  constructor() {
    Player.display = new Display();
  }

  public ask(options: string[]): string {
    let response = question();
    while (this.isInvalidOption(response, options)) {
      Player.display.printInvalidOption(options);
      response = question();
    }
    return response;
  }

  private isInvalidOption(response: string, options: string[]) {
    return !options.some((value) => response.toUpperCase() === value.toUpperCase());
  }
}

export default Player;
