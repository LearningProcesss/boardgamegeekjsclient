import { IRequest } from "../../request";
import { IQueryBuilder } from "../../query/interface";
import { IFetcher } from "../../fetcher";
import { IResponseParser } from "../../responseparser";
import { IBggDto, IDtoParser } from "../../dto";

export interface IBggClient<T extends IRequest, R extends IBggDto> {
    readonly resource: string;
    readonly builder: IQueryBuilder<T>;
    readonly fetcher: IFetcher<string, string>;
    readonly responseParser: IResponseParser<string, any>;
    readonly dtoParser: IDtoParser<R>;
  
    query(request: T): Promise<R[]>;
}