import { IDtoParser, BggUserDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IUserRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggUserClient } from "../interface";

export class BggUserClient implements IBggUserClient {
    resource: string;
    builder: IQueryBuilder<IUserRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggUserDto>;
    constructor(
        builder: IQueryBuilder<IUserRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggUserDto>
      ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/user";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
      }
    
      async query(request: IUserRequest): Promise<BggUserDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
      }
}