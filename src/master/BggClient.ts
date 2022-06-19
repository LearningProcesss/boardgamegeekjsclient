import { IBggThingClient, IBggFamilyClient, IBggForumlistClient, IBggForumClient, BggThingClient, BggFamilyClient, BggForumlistClient, BggForumClient, IBggThreadClient, BggThreadClient, BggUserClient, IBggUserClient, IBggGuildClient, BggGuildClient, IBggPlaysClient, BggPlayClient, IBggCollectionClient, BggCollectionClient, IBggSearchClient, BggSearchClient, IBggHotClient, BggHotClient } from "../client";
import { BggFamilyDtoParser, BggThingDtoParser, BggForumlistDtoParser, BggForumDtoParser, BggThreadDtoParser, BggUserDtoParser, BggGuildDtoParser, BggPlayDtoParser, BggCollectionDtoParser, BggSearchDtoParser, BggHotDtoParser } from "../dto";
import { TextFetcher } from "../fetcher";
import { GenericQueryBuilder } from "../query";
import { IFamilyRequest, IForumlistRequest, IThingRequest, IForumRequest, IThreadRequest, IUserRequest, IGuildRequest, IPlaysRequest, ICollectionRequest, ISearchRequest, IHotItemsRequest } from "../request";
import { XmlResponseParser } from "../responseparser";

/**
 * @description Expose all clients to interact with Bgg api.
 * @class BggClient
 */
export class BggClient {

    private static instance: BggClient;

    readonly thing: Omit<IBggThingClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
    readonly family: Omit<IBggFamilyClient, "builder" | "fetcher" | "responseParser" | "resource" | "dtoParser">;
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
        this.thing = new BggThingClient(new GenericQueryBuilder<IThingRequest>(), new TextFetcher(), new XmlResponseParser(), new BggThingDtoParser());
        this.family = new BggFamilyClient(new GenericQueryBuilder<IFamilyRequest>(), new TextFetcher(), new XmlResponseParser(), new BggFamilyDtoParser());
        this.forumlist = new BggForumlistClient(new GenericQueryBuilder<IForumlistRequest>(), new TextFetcher(), new XmlResponseParser(), new BggForumlistDtoParser());
        this.forum = new BggForumClient(new GenericQueryBuilder<IForumRequest>(), new TextFetcher(), new XmlResponseParser(), new BggForumDtoParser());
        this.thread = new BggThreadClient(new GenericQueryBuilder<IThreadRequest>(), new TextFetcher(), new XmlResponseParser(), new BggThreadDtoParser());
        this.user = new BggUserClient(new GenericQueryBuilder<IUserRequest>(), new TextFetcher(), new XmlResponseParser(), new BggUserDtoParser());
        this.guild = new BggGuildClient(new GenericQueryBuilder<IGuildRequest>(), new TextFetcher(), new XmlResponseParser(), new BggGuildDtoParser());
        this.play = new BggPlayClient(new GenericQueryBuilder<IPlaysRequest>(), new TextFetcher(), new XmlResponseParser(), new BggPlayDtoParser());
        this.collection = new BggCollectionClient(new GenericQueryBuilder<ICollectionRequest>(), new TextFetcher(), new XmlResponseParser(), new BggCollectionDtoParser());
        this.search = new BggSearchClient(new GenericQueryBuilder<ISearchRequest>(), new TextFetcher(), new XmlResponseParser(), new BggSearchDtoParser());
        this.hot = new BggHotClient(new GenericQueryBuilder<IHotItemsRequest>(), new TextFetcher(), new XmlResponseParser(), new BggHotDtoParser());
    }

    static Create(): BggClient {
        if (!BggClient.instance) {
            BggClient.instance = new BggClient();
        }
        return BggClient.instance;
    }
}