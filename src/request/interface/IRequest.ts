import { DomainTypes, FamilyType, ForumlistType, GuildSortType, ParameterOneOrZero, PlaysSubtype, PlaysType, Range, ThingType } from "../../bgg-database-types";

export interface IRequest {

    /**
     * @type {(number | number[])}
     * @memberof IRequest
     * @description Specifies the id of the item(s) to retrieve. To request multiple items with a single query, NNN can specify a comma-delimited list of ids.
     */
    id?: number | number[];
}

export interface IRequestWithType<T> {

    /**
     * @type {T[]}
     * @memberof IRequestWithType
     * @description Specifies that, regardless of the type of item asked for by id, the results are filtered by the ITEMTYPE(s) specified. Multiple ITEMTYPE(s) can be specified in a comma-delimited list.
     */
    type?: T | T[];
}

export interface IThingRequest extends IRequest, IRequestWithType<ThingType> {

    id: number | number[];
    /**
     * @type {ParameterOneOrZero}
     * @memberof IThingRequest
     * @description Returns version info for the item.
     */
    versions?: ParameterOneOrZero;
    /**
     * @type {ParameterOneOrZero}
     * @memberof IThingRequest
     * @description Returns videos for the item.
     */
    videos?: ParameterOneOrZero;
    /**
     * @type {ParameterOneOrZero}
     * @memberof IThingRequest
     * @description Returns ranking and rating stats for the item.
     */
    stats?: ParameterOneOrZero;
    /**
     * @type {ParameterOneOrZero}
     * @memberof IThingRequest
     * @description Returns marketplace data.
     */
    marketplace?: ParameterOneOrZero;
    /**
     * @type {ParameterOneOrZero}
     * @memberof IThingRequest
     * @description Returns all comments about the item. Also includes ratings when commented. See page parameter.
     */
    comments?: ParameterOneOrZero;
    /**
     * @type {ParameterOneOrZero}
     * @memberof IThingRequest
     * @description Returns all ratings for the item. Also includes comments when rated. See page parameter. The ratingcomments and comments parameters cannot be used together, as the output always appears in the <comments> node of the XML; comments parameter takes precedence if both are specified. Ratings are sorted in descending rating value, based on the highest rating they have assigned to that item (each item in the collection can have a different rating).
     */
    ratingcomments?: ParameterOneOrZero;
    /**
     * @type {number}
     * @memberof IThingRequest
     * @description Defaults to 1, controls the page of data to see for historical info, comments, and ratings data.
     */
    page?: number;
    /**
     * @type {number}
     * @memberof IThingRequest
     * @description Set the number of records to return in paging. Minimum is 10, maximum is 100.
     */
    pagesize?: number;
}

export interface IFamilyRequest extends IRequest, IRequestWithType<FamilyType> {

    /**
     * @type {number}
     * @memberof IFamilyRequest
     * @description 	Specifies the id of the family to retrieve. To request multiple families with a single query, NNN can specify a comma-delimited list of ids.
     */
    id: number | number[];
}

export interface IForumlistRequest extends IRequest, IRequestWithType<ForumlistType> {

    /**
     * @type {number}
     * @memberof IForumlistRequest
     * @description Specifies the id of the type of database entry you want the forum list for. This is the id that appears in the address of the page when visiting a particular game in the database.
     */
    id: number;

    type: ForumlistType;
}

export interface IForumRequest extends IRequest {
    id: number;
    page?: number;
}

export interface IThreadRequest extends IRequest {
    /**
     * @type {number}
     * @description Specifies the id of the thread to retrieve.
     * @memberof BggThreadRequestParameters
     */
    id: number;

    /**
     * @type {number}
     * @description Filters the results so that only articles with an equal or higher id than NNN will be returned.
     * @memberof BggThreadRequestParameters
     */
    minarticleid?: number,

    /**
     * @type {number}
     * @description Filters the results so that only articles on the specified date or later will be returned.
     * @memberof BggThreadRequestParameters
     */
    minarticledate?: string

    /**
     * @type {number}
     * @description Limits the number of articles returned to no more than NNN.
     * @memberof BggThreadRequestParameters
     */
    count?: number,
}

export interface IUserRequest extends IRequest {
    /**
    * @type {string}
    * @description Specifies the user name (only one user is requestable at a time).
    * @memberof IUserRequest
    */
    name: string,

    /**
     * @type {ParameterOneOrZero}
     * @description Turns on optional buddies reporting. Results are paged; see page parameter.
     * @memberof IUserRequest
     */
    buddies?: ParameterOneOrZero,

    /**
     * @type {ParameterOneOrZero}
     * @description Turns on optional guilds reporting. Results are paged; see page parameter.
     * @memberof IUserRequest
     */
    guilds?: ParameterOneOrZero,

    /**
     * @type {ParameterOneOrZero}
     * @description Include the user's hot 10 list from their profile. Omitted if empty.
     * @memberof IUserRequest
     */
    hot?: ParameterOneOrZero,

    /**
     * @type {ParameterOneOrZero}
     * @description Include the user's top 10 list from their profile. Omitted if empty.
     * @memberof IUserRequest
     */
    top?: ParameterOneOrZero,

    /**
     * @type {DomainTypes}
     * @description Controls the domain for the users hot 10 and top 10 lists. The DOMAIN default is boardgame.
     * @memberof IUserRequest
     */
    domain?: DomainTypes,

    /**
     * @type {number}
     * @description Specifies the page of buddy and guild results to return. The default page is 1 if you don't specify it; page size is 100 records (Current implementation seems to return 1000 records). The page parameter controls paging for both buddies and guilds list if both are specified. If a <buddies> or <guilds> node is empty, it means that you have requested a page higher than that needed to list all the buddies/guilds or, if you're on page 1, it means that that user has no buddies and is not part of any guilds.
     * @memberof IUserRequest
     */
    page?: number
}

export interface IGuildRequest extends IRequest {

    id: number;
    /**
    * @type {ParameterOneOrZero}
     * @memberof IGuildRequest
     * @description Include member roster in the results. Member list is paged and sorted.
     */
    members?: ParameterOneOrZero;

    /**
     * @type {GuildSortType}
     * @memberof IGuildRequest
     * @description Specifies how to sort the members list; default is username. Valid values are: username, date.
     */
    sort?: GuildSortType;

    /**
     * @type {number}
     * @memberof IGuildRequest
     * @description The page of the members list to return. Page size is 25.
     */
    page?: number;
}

export interface IPlaysRequest extends IRequest {

    /**
     * @type {number}
     * @memberof IPlaysRequest
     * @description Id number of the item you want to request play information for. Data is returned in backwards-chronological form.
     */
    id?: number;

    /**
     * @type {string}
     * @memberof IPlaysRequest
     * @description Name of the player you want to request play information for. Data is returned in backwards-chronological form. You must include either a username or an id and type to get results.
     */
    username?: string;

    /**
     * @type {PlaysType}
     * @memberof IPlaysRequest
     * @description Type of the item you want to request play information for. Valid types include: thing, family.
     */
    type?: PlaysType;

    /**
     * @type {string}
     * @memberof IPlaysRequest
     * @description Returns only plays of the specified date or later.
     */
    mindate?: string;

    /**
     * @type {string}
     * @memberof IPlaysRequest
     * @descirption Returns only plays of the specified date or earlier.
     */
    maxdate?: string;

    /**
     * @type {PlaysSubtype}
     * @memberof IPlaysRequest
     * @description Limits play results to the specified TYPE; boardgame is the default. Valid types include: boardgame, boardgameexpansion, boardgameaccessory, rpgitem, videogame.
     */
    subtype?: PlaysSubtype;

    /**
     * @type {number}
     * @memberof IPlaysRequest
     * @description The page of information to request. Page size is 100 records.
     */
    page?: number;
}

export interface ICollectionRequest extends IRequest {

    /**
     * @type {string}
     * @memberof ICollectionRequest
     * @description Name of the user to request the collection for.
     */
    username?: string;
    /**
     * @description Returns version info for each item in your collection.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    version?: ParameterOneOrZero;

    /**
     * @description Specifies which collection you want to retrieve. TYPE may be boardgame, boardgameexpansion, boardgameaccessory, rpgitem, rpgissue, or videogame; the default is boardgame
     * @type {ThingType}
     * @memberof ICollectionRequest
     */
    subtype?: ThingType;

    /**
     * @description Specifies which subtype you want to exclude from the results.
     * @type {ThingType}
     * @memberof ICollectionRequest
     */
    excludesubtype?: ThingType;

    /**
     * @description Filter collection to specifically listed item(s). NNN may be a comma-delimited list of item ids.
     * @type {number}
     * @memberof ICollectionRequest
     */
    id?: number;

    /**
     * @description Returns more abbreviated results.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    brief?: ParameterOneOrZero;

    /**
     * @description Returns expanded rating/ranking info for the collection.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    stats?: ParameterOneOrZero;

    /**
     * @description Filter for owned games. Set to 0 to exclude these items so marked. Set to 1 for returning owned games and 0 for non-owned games.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    own?: ParameterOneOrZero;

    /**
     * @description Filter for whether an item has been rated. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    rated?: ParameterOneOrZero;

    /**
     * @description Filter for whether an item has been played. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    played?: ParameterOneOrZero;

    /**
     * @description Filter for items that have been commented. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    comment?: ParameterOneOrZero;

    /**
     * @description Filter for items marked for trade. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    trade?: ParameterOneOrZero;

    /**
     * @description Filter for items wanted in trade. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    want?: ParameterOneOrZero;

    /**
     * @description Filter for items on the wishlist. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    wishlist?: ParameterOneOrZero;

    /**
     * @description Filter for wishlist priority. Returns only items of the specified priority.
     * @type {Range<1, 5>}
     * @memberof ICollectionRequest
     */
    wishlistpriority?: Range<1, 6>;

    /**
     * @description Filter for pre-ordered games Returns only items of the specified priority. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    preordered?: ParameterOneOrZero;

    /**
     * @description Filter for items marked as wanting to play. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    wanttoplay?: ParameterOneOrZero;

    /**
     * @description Filter for ownership flag. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    wanttobuy?: ParameterOneOrZero;

    /**
     * @description Filter for games marked previously owned. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    prevowned?: ParameterOneOrZero;

    /**
     * @description Filter on whether there is a comment in the Has Parts field of the item. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    hasparts?: ParameterOneOrZero;

    /**
     * @description Filter on whether there is a comment in the Wants Parts field of the item. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    wantparts?: ParameterOneOrZero;

    /**
     * @description Filter on minimum personal rating assigned for that item in the collection.
     * @type {Range<1, 10>}
     * @memberof ICollectionRequest
     */
    minrating?: Range<1, 11>;

    /**
     * @description Filter on maximum personal rating assigned for that item in the collection. [Note: Although you'd expect it to be maxrating, it's rating.]
     * @type {Range<1, 10>}
     * @memberof ICollectionRequest
     */
    rating?: Range<1, 11>;

    /**
     * @description Filter on minimum BGG rating for that item in the collection. Note: 0 is ignored... you can use -1 though, for example min -1 and max 1 to get items w/no bgg rating.
     * @type {Range<1, 10>}
     * @memberof ICollectionRequest
     */
    minbggrating?: Range<1, 11>;

    /**
     * @description Filter on maximum BGG rating for that item in the collection. [Note: Although you'd expect it to be maxbggrating, it's bggrating.]
     * @type {Range<1, 10>}
     * @memberof ICollectionRequest
     */
    bggrating?: Range<1, 11>;

    /**
     * @description Filter by minimum number of recorded plays.
     * @type {number}
     * @memberof ICollectionRequest
     */
    minplays?: number;

    /**
     * @description Filter by maximum number of recorded plays. [Note: Although the two maxima parameters above lack the max part, this one really is maxplays.]
     * @type {number}
     * @memberof ICollectionRequest
     */
    maxplays?: number;

    /**
     * @description Filter to show private collection info. Only works when viewing your own collection and you are logged in.
     * @type {ParameterOneOrZero}
     * @memberof ICollectionRequest
     */
    showprivate?: ParameterOneOrZero;

    /**
     * @description Restrict the collection results to the single specified collection id. Collid is returned in the results of normal queries as well.
     * @type {number}
     * @memberof ICollectionRequest
     */
    collid?: number;

    /**
     * @description Restricts the collection results to only those whose status (own, want, fortrade, etc.) has changed or been added since the date specified (does not return results for deletions). Time may be added as well: modifiedsince=YY-MM-DD%20HH:MM:SS
     * @type {string}
     * @memberof ICollectionRequest
     */
    modifiedsince?: string;
}