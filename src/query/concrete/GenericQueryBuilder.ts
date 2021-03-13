import { IRequest } from "../../request";
import { IQueryBuilder } from "../interface";

export class GenericBuilder<T extends IRequest> implements IQueryBuilder<T> {
    build(parameter: T extends IRequest ? any : any): string {
      return Object.keys(parameter)
        .map(property => `${property}=${parameter[property].toString()}`)
        .join("&");
    }
}