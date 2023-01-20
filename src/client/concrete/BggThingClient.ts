import { IDtoParser, BggThingDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IRequestPaginator } from "../../paginator";
import { IQueryBuilder } from "../../query";
import { IThingRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { PaginationRequestDto, ProgressResponseDto, QueryOptions } from "../dto";
import { IBggThingClient } from "..";

export class BggThingClient implements IBggThingClient {
  resource: string;
  builder: IQueryBuilder<IThingRequest>;
  fetcher: IFetcher<string, string>;
  responseParser: IResponseParser<string, any>;
  dtoParser: IDtoParser<BggThingDto>;
  paginator: IRequestPaginator;
  progressHandler: (progress: ProgressResponseDto<BggThingDto>) => void

  constructor(
    builder: IQueryBuilder<IThingRequest>,
    fetcher: IFetcher<string, string>,
    responseParser: IResponseParser<string, any>,
    dtoParser: IDtoParser<BggThingDto>,
    paginator: IRequestPaginator
  ) {
    this.resource = "https://www.boardgamegeek.com/xmlapi2/thing";
    this.builder = builder;
    this.fetcher = fetcher;
    this.responseParser = responseParser;
    this.dtoParser = dtoParser;
    this.paginator = paginator;
  }

  async query(request: IThingRequest): Promise<BggThingDto[]> {
    if (Array.isArray(request.id) && (request.id as Array<number>).length > 50) {
      const pagination: PaginationRequestDto<IThingRequest>[] = this.paginator.paginate<IThingRequest>(request, 50);

      let collection: BggThingDto[] = []

      for await (const data of pagination.map(page => this.internalQuery(page.request))) {
        collection.push(...data);
      }

      return collection;
    }

    return this.internalQuery(request);
  }

  async queryWithProgress(request: IThingRequest, progressOptions?: QueryOptions, progressHandler?: (progress: ProgressResponseDto<BggThingDto>) => void): Promise<void> {
    const pagination: PaginationRequestDto<IThingRequest>[] = this.paginator.paginate<IThingRequest>(request, progressOptions?.limit);
    for (const page of pagination) {
      const data: Promise<BggThingDto[]> = this.internalQuery(page.request);
      progressHandler?.({
        current: page.current,
        total: page.total,
        data: await data
      });
      this.progressHandler?.({
        current: page.current,
        total: page.total,
        data: await data
      })
    }
  }

  private async internalQuery(request: IThingRequest): Promise<BggThingDto[]> {
    const querystring = this.builder.build(request);
    const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
    const jsonData = await this.responseParser.parseResponse(xml);
    return await this.dtoParser.jsonToDto(jsonData);
  }
}
