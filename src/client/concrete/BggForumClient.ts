import { IDtoParser, BggForumDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IForumRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggForumClient } from "../interface";

export class BggForumClient implements IBggForumClient {
    resource: string;
    builder: IQueryBuilder<IForumRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggForumDto>;
    constructor(
        builder: IQueryBuilder<IForumRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggForumDto>
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/forum";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
    }
    async query(request: IForumRequest): Promise<BggForumDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }

}