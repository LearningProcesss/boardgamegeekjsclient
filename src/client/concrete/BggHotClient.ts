import { IDtoParser, BggHotDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IHotItemsRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggHotClient } from "../interface";

export class BggHotClient implements IBggHotClient {
    resource: string;
    builder: IQueryBuilder<IHotItemsRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggHotDto>;

    constructor(
        builder: IQueryBuilder<IHotItemsRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggHotDto>
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/hot";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
    }


    async query(request: IHotItemsRequest): Promise<BggHotDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }

}