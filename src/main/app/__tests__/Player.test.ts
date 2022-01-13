import Player from "../Player";

const mockInvalidResponse = "invalid response";
const mockValidResponse = "valid response";
let mockResponses = [mockInvalidResponse, mockValidResponse];

beforeEach(() => (mockResponses = [mockValidResponse, mockInvalidResponse]));

jest.mock("readline-sync", () => ({
  question: () => mockResponses.pop(),
}));

const mockPrintInvalid = jest.fn();
jest.mock("../../display/Display", () => {
  return jest.fn().mockImplementation(() => ({
    printInvalidOption: mockPrintInvalid,
  }));
});

const options = [mockValidResponse, "other valid response"];

describe("Player", () => {
  it("'ask' returns correct string", () => {
    // Given
    const player = new Player();
    // When, Then
    expect(player.ask(options)).toEqual(mockValidResponse);
  });

  it("'ask' calls 'Display.printInvalidOption' correctly when incorrect answer given", () => {
    // Given
    const player = new Player();
    // When
    player.ask(options);
    // Then
    expect(mockPrintInvalid).toBeCalledWith(options);
  });
});
