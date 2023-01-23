import { JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";
import { BggStatisticsRatingRanksDto } from "./BggStatisticsRatingRanksDto";

export class BggStatisticsRatingDto {
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
        using: (items: any[]) => items[0]?.rank
    })
    ranks!: BggStatisticsRatingRanksDto[];
}
