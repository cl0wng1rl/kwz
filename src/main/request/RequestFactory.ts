import { Arguments } from "../cli";
import Query from "./Query";
import QueryArguments from "./QueryArguments";
import Request from "./Request";
import CONSTANTS from "./constants";

class RequestFactory {
  public getQuestionRequest(args: Arguments) {
    const queryArgs = new QueryArguments(args);
    const query = new Query(queryArgs);
    return new Request(query.getOptions());
  }

  public getCategoryRequest() {
    return new Request({ host: CONSTANTS.host, path: CONSTANTS.categoryAPI });
  }
}

export default RequestFactory;
