import { IDtoParser, BggForumlistDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IForumlistRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggForumlistClient } from "../interface/IBggClients";

export class BggForumlistClient implements IBggForumlistClient {
    resource: string;
    builder: IQueryBuilder<IForumlistRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggForumlistDto>;
    constructor(
        builder: IQueryBuilder<IForumlistRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggForumlistDto>
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/forumlist";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
    }
    async query(request: IForumlistRequest): Promise<BggForumlistDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }
}