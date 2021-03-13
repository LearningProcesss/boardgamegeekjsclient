import { IDtoParser } from "../../dto";
import { BggThingDto } from "../../dto/concrete";
import { IFetcher } from "../../fetcher";
import { IQueryBuilder } from "../../query";
import { IThingRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { IBggThingClient } from "../interface";

export class BggThingClient implements IBggThingClient {
  resource: string;
  builder: IQueryBuilder<IThingRequest>;
  fetcher: IFetcher<string, string>;
  responseParser: IResponseParser<string, any>;
  dtoParser: IDtoParser<BggThingDto>;
  constructor(
    builder: IQueryBuilder<IThingRequest>,
    fetcher: IFetcher<string, string>,
    responseParser: IResponseParser<string, any>,
    dtoParser: IDtoParser<BggThingDto>
  ) {
    this.resource = "https://www.boardgamegeek.com/xmlapi2/thing";
    this.builder = builder;
    this.fetcher = fetcher;
    this.responseParser = responseParser;
    this.dtoParser = dtoParser;
  }

  async query(request: IThingRequest): Promise<BggThingDto[]> {
    const querystring = this.builder.build(request);
    const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
    const jsonData = await this.responseParser.parseResponse(xml);
    return await this.dtoParser.jsonToDto(jsonData);
  }
}