import { IDtoParser, BggFamilyDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IRequestPaginator } from "../../paginator";
import { IQueryBuilder } from "../../query";
import { IFamilyRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { PaginationRequestDto, QueryOptions, ProgressResponseDto } from "../dto";
import { IBggFamilyClient } from "../interface";

export class BggFamilyClient implements IBggFamilyClient {
    resource: string;
    builder: IQueryBuilder<IFamilyRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggFamilyDto>;
    paginator: IRequestPaginator;
    constructor(
        builder: IQueryBuilder<IFamilyRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggFamilyDto>,
        paginator: IRequestPaginator
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/family";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
        this.paginator = paginator;
    }
    progressHandler?: (progress: ProgressResponseDto<BggFamilyDto>) => void;

    async queryWithProgress(request: IFamilyRequest, progressOptions?: QueryOptions, progressHandler?: (progress: ProgressResponseDto<BggFamilyDto>) => void): Promise<void> {
        const pagination: PaginationRequestDto<IFamilyRequest>[] = this.paginator.paginate<IFamilyRequest>(request, progressOptions?.limit);
        for (const page of pagination) {
            const data: Promise<BggFamilyDto[]> = this.internalQuery(page.request);
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

    async query(request: IFamilyRequest): Promise<BggFamilyDto[]> {
        if (Array.isArray(request.id) && (request.id as Array<number>).length > 1) {
            const pagination: PaginationRequestDto<IFamilyRequest>[] = this.paginator.paginate(request, 1);

            let collection: BggFamilyDto[] = []

            for await (const data of pagination.map(page => this.internalQuery(page.request))) {
                collection.push(...data);
            }

            return collection;
        }
        return this.internalQuery(request);
    }

    private async internalQuery(request: IFamilyRequest): Promise<BggFamilyDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }
}