import { request } from "https";
import { IncomingMessage } from "http";
import { Options } from "./Query";

class Request {
  constructor(private options: Options) {}

  public async get(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const rq = request(this.options, (response: IncomingMessage) => {
        let data = "";
        response.on("data", (chunk) => (data += chunk));
        response.on("end", () => resolve(data));
      });

      rq.on("error", (e) => reject(e));
      rq.end();
    });
  }
}

export default Request;
