import Display from "../Display";
import { Question } from "../questions";

jest.mock("../questions/Question");

const mockLog = jest.fn();

beforeEach(() => {
  console.log = mockLog;
});

const statement: string = "statement";
const options = {
  A: "Option A",
  B: "Option B",
  C: "Option C",
  D: "Option D",
};
const correct = "Correct!";
const incorrect = "Wrong!";

const mockQuestion = () => {
  (Question as jest.Mock).mockImplementation(() => ({
    statement: statement,
    options: options,
  }));
};

const getMockQuestion = () => new Question(statement, options["A"], Object.values(options));

describe("Display", () => {
  it("'printQuestion' prints correct string", async () => {
    // Given
    mockQuestion();
    const display = new Display();
    const mockQuestionInstance = getMockQuestion();
    // When
    display.printQuestion(mockQuestionInstance);
    // Then
    expect(mockLog).toBeCalledWith(statement);
    Object.entries(options).forEach((v) => expect(mockLog).toBeCalledWith(`${v[0]}: ${v[1]}`));
  });

  it("'printResponse' prints correct string when correct", async () => {
    // Given
    const display = new Display();
    // When
    display.printResponse(true);
    // Then
    expect(mockLog).toBeCalledWith(correct);
  });

  it("'printResponse' prints correct string when incorrect", async () => {
    // Given
    const display = new Display();
    // When
    display.printResponse(false);
    // Then
    expect(mockLog).toBeCalledWith(incorrect);
  });

  it("'printScore' prints correct string", async () => {
    // Given
    mockQuestion();
    const display = new Display();
    const score = 1,
      total = 2;
    // When
    display.printScore(score, total);
    // Then
    expect(mockLog).toBeCalledWith(`Score: ${score}/${total}`);
  });
});
