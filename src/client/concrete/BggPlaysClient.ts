import { IDtoParser, BggPlayDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IPlaysRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggPlaysClient } from "../interface";

export class BggPlayClient implements IBggPlaysClient {
    resource: string;
    builder: IQueryBuilder<IPlaysRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggPlayDto>;
    constructor(
        builder: IQueryBuilder<IPlaysRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggPlayDto>
      ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/plays";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
      }
    
      async query(request: IPlaysRequest): Promise<BggPlayDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
      }
}