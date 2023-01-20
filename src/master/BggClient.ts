import { IBggThingClient, IBggFamilyClient, IBggForumlistClient, IBggForumClient, BggThingClient, BggFamilyClient, BggForumlistClient, BggForumClient, IBggThreadClient, BggThreadClient, BggUserClient, IBggUserClient, IBggGuildClient, BggGuildClient, IBggPlaysClient, BggPlayClient, IBggCollectionClient, BggCollectionClient, IBggSearchClient, BggSearchClient, IBggHotClient, BggHotClient } from "../client";
import { BggFamilyDtoParser, BggThingDtoParser, BggForumlistDtoParser, BggForumDtoParser, BggThreadDtoParser, BggUserDtoParser, BggGuildDtoParser, BggPlayDtoParser, BggCollectionDtoParser, BggSearchDtoParser, BggHotDtoParser } from "../dto";
import { IFetcher, TextFetcher } from "../fetcher";
import { IRequestPaginator, RequestPaginator } from "../paginator";
import { GenericQueryBuilder } from "../query";
import { IFamilyRequest, IForumlistRequest, IThingRequest, IForumRequest, IThreadRequest, IUserRequest, IGuildRequest, IPlaysRequest, ICollectionRequest, ISearchRequest, IHotItemsRequest } from "../request";
import { IResponseParser, XmlResponseParser } from "../responseparser";

/**
 * @description Expose all clients to interact with Bgg api.
 * @class BggClient
 */
export class BggClient {

    private static instance: BggClient;

    readonly thing: Omit<IBggThingClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser" | "paginator">;
    readonly family: Omit<IBggFamilyClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser" | "paginator">;
    readonly forumlist: Omit<IBggForumlistClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly forum: Omit<IBggForumClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly thread: Omit<IBggThreadClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly user: Omit<IBggUserClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly guild: Omit<IBggGuildClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly play: Omit<IBggPlaysClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly collection: Omit<IBggCollectionClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly search: Omit<IBggSearchClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly hot: Omit<IBggHotClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;

    private constructor() {
        const fetcher: IFetcher<string, string> = new TextFetcher();
        const responseParser: IResponseParser<string, any> = new XmlResponseParser();
        const paginator: IRequestPaginator = new RequestPaginator();

        this.thing = new BggThingClient(new GenericQueryBuilder<IThingRequest>(), fetcher, responseParser, new BggThingDtoParser(), paginator);
        this.family = new BggFamilyClient(new GenericQueryBuilder<IFamilyRequest>(), fetcher, responseParser, new BggFamilyDtoParser(), paginator);
        this.forumlist = new BggForumlistClient(new GenericQueryBuilder<IForumlistRequest>(), fetcher, responseParser, new BggForumlistDtoParser(), paginator);
        this.forum = new BggForumClient(new GenericQueryBuilder<IForumRequest>(), fetcher, responseParser, new BggForumDtoParser());
        this.thread = new BggThreadClient(new GenericQueryBuilder<IThreadRequest>(), fetcher, responseParser, new BggThreadDtoParser());
        this.user = new BggUserClient(new GenericQueryBuilder<IUserRequest>(), fetcher, responseParser, new BggUserDtoParser());
        this.guild = new BggGuildClient(new GenericQueryBuilder<IGuildRequest>(), fetcher, responseParser, new BggGuildDtoParser());
        this.play = new BggPlayClient(new GenericQueryBuilder<IPlaysRequest>(), fetcher, responseParser, new BggPlayDtoParser());
        this.collection = new BggCollectionClient(new GenericQueryBuilder<ICollectionRequest>(), fetcher, responseParser, new BggCollectionDtoParser());
        this.search = new BggSearchClient(new GenericQueryBuilder<ISearchRequest>(), fetcher, responseParser, new BggSearchDtoParser());
        this.hot = new BggHotClient(new GenericQueryBuilder<IHotItemsRequest>(), fetcher, responseParser, new BggHotDtoParser());
    }

    static Create(): BggClient {
        if (!BggClient.instance) {
            BggClient.instance = new BggClient();
        }
        return BggClient.instance;
    }
}