import { IDtoParser, BggThreadDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IThreadRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggThreadClient } from "../interface";

export class BggThreadClient implements IBggThreadClient {
    resource: string;
    builder: IQueryBuilder<IThreadRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggThreadDto>;
    constructor(
        builder: IQueryBuilder<IThreadRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggThreadDto>
      ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/thread";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
      }
    
      async query(request: IThreadRequest): Promise<BggThreadDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
      }
}