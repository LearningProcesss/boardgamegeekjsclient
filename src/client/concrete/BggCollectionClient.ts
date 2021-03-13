import { IDtoParser, BggCollectionDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { ICollectionRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggCollectionClient } from "../interface";

export class BggCollectionClient implements IBggCollectionClient {
    resource: string;
    builder: IQueryBuilder<ICollectionRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggCollectionDto>;
    constructor(
        builder: IQueryBuilder<ICollectionRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggCollectionDto>
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/collection";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
    }
    async query(request: ICollectionRequest): Promise<BggCollectionDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }

}