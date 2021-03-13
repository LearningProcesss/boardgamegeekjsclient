import { IRequest } from "../../request/interface";

export interface IQueryBuilder<T extends IRequest> {
    build(parameter: T): string;
}