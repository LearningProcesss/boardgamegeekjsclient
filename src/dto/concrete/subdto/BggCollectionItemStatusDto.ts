import { JsonAlias, JsonClassType, JsonProperty } from "jackson-js";

export class BggCollectionItemStatusDto {
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
