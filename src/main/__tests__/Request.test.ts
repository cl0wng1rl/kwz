import Request from "../Request";

const responseOnFn = jest.fn((_: string, fn: Function) => fn());
const requestOnFn = jest.fn((_: string, fn: Function) => fn());
const requestEndFn = jest.fn();

const mockResponse = jest.fn(() => ({ on: responseOnFn }));
const mockRequestFunction = jest.fn((options, cb) => {
  cb(mockResponse());
  return { on: requestOnFn, end: requestEndFn };
});

jest.mock("https", () => ({
  request: (options: any, callBack: any) => mockRequestFunction(options, callBack),
}));

const options = { host: "host", path: "path" };

const expectFunctionsAreCalledCorrectly = () => {
  expect(mockRequestFunction).toBeCalled();
  expect(mockRequestFunction).toBeCalledWith(
    expect.objectContaining(options), 
    expect.any(Function)
  );
  expect(responseOnFn).toBeCalledWith("data", expect.any(Function));
  expect(responseOnFn).toBeCalledWith("end", expect.any(Function));
  expect(requestOnFn).toBeCalledWith("error", expect.any(Function));
  expect(requestEndFn).toBeCalled();
};

describe("Request", () => {
  it("calls 'https' request correctly", () => {
    // Given
    const request = new Request(options);
    // When
    request.get();
    // Then
    expectFunctionsAreCalledCorrectly();
  });
});
