import { readFileSync } from "fs";
import CLI from "../main/cli";

const mockQuestions = readFileSync(__dirname + "/data/questions.json").toString();
const mockGet = jest.fn().mockReturnValue(mockQuestions);
jest.mock("../main/request/Request", () => {
  return jest.fn().mockImplementation(() => ({
    get: mockGet,
  }));
});

const mockResponses = ["A", "B", "C", "A", "B"];
jest.mock("readline-sync", () => ({
  question: () => mockResponses.shift(),
}));
const mockOutputLines: string[] = [];
const mockLog = (s: string | undefined) => s && mockOutputLines.push(s);
console.log = mockLog;

const mockRandom = () => 1;
Math.random = mockRandom;

const expectOutput = JSON.parse(readFileSync(__dirname + "/data/output.json").toString());

describe("Full Quiz", () => {
  test("expected lines are printed", async () => {
    // Given
    const args = ["command", "path", "-n", "3"];
    // When
    await new CLI().run(args);
    // Then
    expect(mockOutputLines.length).not.toEqual(0);
    expect(mockOutputLines).toEqual(expectOutput);
  });
});
