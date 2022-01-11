import Player from "../Player";
import { question } from "readline-sync";

const response = "response";
const mockedQuestion = jest.fn(() => "response");

jest.mock("readline-sync");

const mockQuestion = () => {
  (question as jest.Mock).mockImplementation(mockedQuestion);
};

describe("Player", () => {
  it("'ask' calls 'readLineSync.question'", () => {
    // Given
    mockQuestion();
    const player = new Player();
    // When
    player.ask();
    // Then
    expect(mockedQuestion).toBeCalled();
  });

  it("'ask' returns correct string", () => {
    // Given
    mockQuestion();
    const player = new Player();
    // When, Then
    expect(player.ask()).toEqual(response);
  });
});
