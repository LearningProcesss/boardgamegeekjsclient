import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";
import { clearString } from "../../../utils";

export class BggStatisticsRatingRanksDto {
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
    @JsonDeserialize({using: (value: string) => clearString(value)})
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_friendlyname"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
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
