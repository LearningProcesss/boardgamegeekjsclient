import { JsonAlias, JsonClassType, JsonProperty } from "jackson-js";

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
