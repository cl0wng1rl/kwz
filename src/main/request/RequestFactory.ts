import { Arguments } from "../cli";
import Query from "./Query";
import QueryArguments from "./QueryArguments";
import Request from "./Request";

class RequestFactory {
  public getQuestionRequest(args: Arguments) {
    const queryArgs = new QueryArguments(args);
    const query = new Query(queryArgs);
    return new Request(query.getOptions());
  }
}

export default RequestFactory;
