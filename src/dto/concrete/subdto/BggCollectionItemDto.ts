import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";

export class BggCollectionItemDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_objectid"] })
    objectid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_collid"] })
    collid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_objecttype"] })
    objecttype!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_subtype"] })
    subtype!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    yearpublished!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    numplays!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    image!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    thumbnail!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    comment!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (value: []) => value.map(item => item['#text'])[0]
    })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    originalname!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [BggCollectionItemStatusDto] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (value: any[]) => value[0]
    })
    @JsonManagedReference()
    status!: BggCollectionItemStatusDto;
}

class BggCollectionItemStatusDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_own"] })
    own!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_prevowned"] })
    prevowned!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_fortrade"] })
    fortrade!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_want"] })
    want!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_wanttoplay"] })
    wanttoplay!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_wanttobuy"] })
    wanttobuy!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_wishlist"] })
    wishlist!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_wishlistpriority"] })
    wishlistpriority!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_preordered"] })
    preordered!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_lastmodified"] })
    lastmodified!: string;
}