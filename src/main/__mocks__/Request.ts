import { readFileSync } from "fs";

const mockQuestions = readFileSync(__dirname + "/data/questions.json").toString();

export const mockGet = jest.fn(async () => Promise.resolve(mockQuestions));

const mock = jest.fn().mockImplementation(() => ({ get: jest.fn().mockImplementation(mockGet) }));

export default mock;
