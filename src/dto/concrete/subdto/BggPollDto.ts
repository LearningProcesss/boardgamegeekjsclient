import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggPollResultDto } from "./BggPollResultDto";
import { clearString } from "../../../utils";

export class BggPollDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_name"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_title"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    title!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_totalvotes"] })
    totalvotes!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggPollResultDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["results"] })
    results!: BggPollResultDto[]
}