import { JsonAlias, JsonClassType, JsonProperty } from "jackson-js";

export class BggThingCommentDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    value!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_username"] })
    username!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_rating"] })
    rating!: number;
}