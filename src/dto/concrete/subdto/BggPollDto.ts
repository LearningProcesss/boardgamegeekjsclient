import { JsonAlias, JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggPollResultDto } from "./BggPollResultDto";

export class BggPollDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_name"] })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_title"] })
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