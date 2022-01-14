import { JsonAlias, JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";

export class BggPollResultDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_numplayers"] })
    numplayers!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggPollResultItemDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["result"] })
    result!: BggPollResultItemDto[]
}

export class BggPollResultItemDto {

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_level"] })
    level!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    value!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numvotes"] })
    numvotes!: number;
}