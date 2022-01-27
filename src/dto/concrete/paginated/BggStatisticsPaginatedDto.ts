import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";
import { BggStatisticsRatingDto } from "./BggStatisticsRatingDto";

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