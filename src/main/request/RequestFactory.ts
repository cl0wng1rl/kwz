import Query from "./Query";
import QueryArguments from "./QueryArguments";
import { Arguments } from "../cli";

class RequestFactory {
  public create(args: Arguments) {
    const queryArgs = new QueryArguments(args);
    const query = new Query(queryArgs);
    return query.getRequest();
  }
}

export default RequestFactory;
