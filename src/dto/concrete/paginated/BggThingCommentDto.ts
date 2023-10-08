import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";
import { clearString } from "../../../utils";

export class BggThingCommentDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    value!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_username"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    username!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_rating"] })
    rating!: number;
}