import { IRequest } from "../../request";
import { IQueryBuilder } from "../interface";

export class GenericQueryBuilder<T extends IRequest> implements IQueryBuilder<T> {
    build(parameter: T extends IRequest ? any : any): string {
      return Object.keys(parameter)
        .filter(property => parameter[property] !== null && parameter[property] !== undefined && typeof parameter[property] !== 'undefined')
        .map(property => `${property}=${parameter[property].toString()}`)
        .join("&");
    }
}