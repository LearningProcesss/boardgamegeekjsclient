import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";

export class BggStatisticsPaginatedDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_page"] })
    page!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [BggStatisticsRatingDto] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]
    })
    ratings!: BggStatisticsRatingDto;
}

class BggStatisticsRatingDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    average!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    usersrated!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    bayesaverage!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    stddev!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    median!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    owned!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    trading!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    wanting!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    wishing!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    numcomments!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    numweights!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    averageweight!: number;
    
    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggStatisticsRatingRanksDto]] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0].rank
    })
    ranks!: BggStatisticsRatingRanksDto[];
}

class BggStatisticsRatingRanksDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_type"] })
    type!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_name"] })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_friendlyname"] })
    friendlyname!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_value"] })
    value!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_bayesaverage"] })
    bayesaverage!: number;
}