import { IDtoParser, BggSearchDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { ISearchRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggSearchClient } from "../interface/IBggClients";

export class BggSearchClient implements IBggSearchClient {
    resource: string;
    builder: IQueryBuilder<ISearchRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggSearchDto>;
    constructor(
        builder: IQueryBuilder<ISearchRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggSearchDto>
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/search";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
    }

    async query(request: ISearchRequest): Promise<BggSearchDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }

}