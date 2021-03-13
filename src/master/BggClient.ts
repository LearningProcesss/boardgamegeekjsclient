import { IBggThingClient, IBggFamilyClient, IBggForumlistClient, IBggForumClient, BggThingClient, BggFamilyClient, BggForumlistClient, BggForumClient, IBggThreadClient, BggThreadClient, BggUserClient, IBggUserClient, IBggGuildClient, BggGuildClient, IBggPlaysClient, BggPlayClient, IBggCollectionClient, BggCollectionClient } from "../client";
import { BggFamilyDtoParser, BggThingDtoParser, BggForumlistDtoParser, BggForumDtoParser, BggThreadDtoParser, BggUserDtoParser, BggGuildDtoParser, BggPlayDtoParser, BggCollectionDtoParser } from "../dto";
import { TextFetcher } from "../fetcher";
import { GenericBuilder } from "../query";
import { IFamilyRequest, IForumlistRequest, IThingRequest, IForumRequest, IThreadRequest, IUserRequest, IGuildRequest, IPlaysRequest, ICollectionRequest } from "../request";
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

    private constructor() {
        this.thing = new BggThingClient(new GenericBuilder<IThingRequest>(), new TextFetcher(), new XmlResponseParser(), new BggThingDtoParser());
        this.family = new BggFamilyClient(new GenericBuilder<IFamilyRequest>(), new TextFetcher(), new XmlResponseParser(), new BggFamilyDtoParser());
        this.forumlist = new BggForumlistClient(new GenericBuilder<IForumlistRequest>(), new TextFetcher(), new XmlResponseParser(), new BggForumlistDtoParser());
        this.forum = new BggForumClient(new GenericBuilder<IForumRequest>(), new TextFetcher(), new XmlResponseParser(), new BggForumDtoParser());
        this.thread = new BggThreadClient(new GenericBuilder<IThreadRequest>(), new TextFetcher(), new XmlResponseParser(), new BggThreadDtoParser());
        this.user = new BggUserClient(new GenericBuilder<IUserRequest>(), new TextFetcher(), new XmlResponseParser(), new BggUserDtoParser());
        this.guild = new BggGuildClient(new GenericBuilder<IGuildRequest>(), new TextFetcher(), new XmlResponseParser(), new BggGuildDtoParser());
        this.play = new BggPlayClient(new GenericBuilder<IPlaysRequest>(), new TextFetcher(), new XmlResponseParser(), new BggPlayDtoParser());
        this.collection = new BggCollectionClient(new GenericBuilder<ICollectionRequest>(), new TextFetcher(), new XmlResponseParser(), new BggCollectionDtoParser());
    }

    static Create(): BggClient {
        if (!BggClient.instance) {
            BggClient.instance = new BggClient();
        }
        return BggClient.instance;
    }
}