import { IDtoParser, BggFamilyDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IFamilyRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggFamilyClient } from "../interface";

export class BggFamilyClient implements IBggFamilyClient {
    resource: string;
    builder: IQueryBuilder<IFamilyRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggFamilyDto>;
    constructor(
        builder: IQueryBuilder<IFamilyRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggFamilyDto>
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/family";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
    }
    async query(request: IFamilyRequest): Promise<BggFamilyDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }

}