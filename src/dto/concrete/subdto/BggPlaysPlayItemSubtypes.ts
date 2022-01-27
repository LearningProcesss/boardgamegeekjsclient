import { JsonAlias, JsonClassType, JsonProperty } from "jackson-js";

export class BggPlaysPlayItemSubtypes {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    value!: string;
}
