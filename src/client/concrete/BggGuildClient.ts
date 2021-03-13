import { IDtoParser, BggGuildDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IGuildRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggGuildClient } from "../interface";

export class BggGuildClient implements IBggGuildClient {
    resource: string;
    builder: IQueryBuilder<IGuildRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggGuildDto>;
    constructor(
        builder: IQueryBuilder<IGuildRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggGuildDto>
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/guild";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
    }
    async query(request: IGuildRequest): Promise<BggGuildDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }
}