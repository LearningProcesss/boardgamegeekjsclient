import { IDtoParser, BggForumlistDto } from "../../dto";
import { IFetcher } from "../../fetcher";
import { IRequestPaginator } from "../../paginator";
import { IQueryBuilder } from "../../query";
import { IForumlistRequest } from "../../request";
import { IResponseParser } from "../../responseparser";
import { PaginationRequestDto, ProgressResponseDto, QueryOptions } from "../dto";
import { IBggForumlistClient } from "../interface/IBggClients";

export class BggForumlistClient implements IBggForumlistClient {
    resource: string;
    builder: IQueryBuilder<IForumlistRequest>;
    fetcher: IFetcher<string, string>;
    responseParser: IResponseParser<string, any>;
    dtoParser: IDtoParser<BggForumlistDto>;
    paginator: IRequestPaginator;
    progressHandler?: ((progress: ProgressResponseDto<BggForumlistDto>) => void);
    constructor(
        builder: IQueryBuilder<IForumlistRequest>,
        fetcher: IFetcher<string, string>,
        responseParser: IResponseParser<string, any>,
        dtoParser: IDtoParser<BggForumlistDto>,
        paginator: IRequestPaginator
    ) {
        this.resource = "https://www.boardgamegeek.com/xmlapi2/forumlist";
        this.builder = builder;
        this.fetcher = fetcher;
        this.responseParser = responseParser;
        this.dtoParser = dtoParser;
        this.paginator = paginator;
    }

    async query(request: IForumlistRequest): Promise<BggForumlistDto[]> {
        if (Array.isArray(request.id) && (request.id as Array<number>).length > 50) {
            const pagination: PaginationRequestDto<IForumlistRequest>[] = this.paginator.paginate<IForumlistRequest>(request, 50);

            let collection: BggForumlistDto[] = []

            for await (const data of pagination.map(page => this.internalQuery(page.request))) {
                collection.push(...data);
            }

            return collection;
        }

        return this.internalQuery(request);
    }

    async queryWithProgress(request: IForumlistRequest, progressOptions?: QueryOptions | undefined, progressHandler?: (progress: ProgressResponseDto<BggForumlistDto>) => void): Promise<void> {
        const pagination: PaginationRequestDto<IForumlistRequest>[] = this.paginator.paginate<IForumlistRequest>(request, progressOptions?.limit);
        for (const page of pagination) {
            const data: Promise<BggForumlistDto[]> = this.internalQuery(page.request);
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


    private async internalQuery(request: IForumlistRequest): Promise<BggForumlistDto[]> {
        const querystring = this.builder.build(request);
        const xml = await this.fetcher.doFetch(`${this.resource}?${querystring}`);
        const jsonData = await this.responseParser.parseResponse(xml);
        return await this.dtoParser.jsonToDto(jsonData);
    }
}