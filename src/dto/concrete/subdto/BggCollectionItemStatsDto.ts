import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";

export class BggCollectionItemStatsDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_minplayers"] })
    minplayers: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_maxplayers"] })
    maxplayers: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_minplaytime"] })
    minplaytime: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_maxplaytime"] })
    maxplaytime: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_playingtime"] })
    playingtime: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numowned"] })
    numowned: number;

    @JsonProperty()
    @JsonClassType({ type: () => [BggCollectionItemStatRatingDto] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]
    })
    rating!: BggCollectionItemStatRatingDto;
}

export class BggCollectionItemStatRatingDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_value"] })
    value: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    usersrated!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    average!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    bayesaverage!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    stddev!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    median!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggCollectionItemStatRatingRanksDto]] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]?.rank
    })
    ranks!: BggCollectionItemStatRatingRanksDto[];
}

export class BggCollectionItemStatRatingRanksDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_type"] })
    type: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_name"] })
    name: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_friendlyname"] })
    friendlyname: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_value"] })
    value: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_bayesaverage"] })
    bayesaverage: number;
}