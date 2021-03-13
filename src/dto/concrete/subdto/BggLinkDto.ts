import { JsonAlias, JsonClassType, JsonProperty } from "jackson-js";


export class BggLinkDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_type"] })
    type!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    value!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Boolean] })
    @JsonAlias({ values: ["@_inbound"] })
    inbound!: boolean;
}