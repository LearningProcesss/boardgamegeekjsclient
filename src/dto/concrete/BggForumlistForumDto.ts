import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";
import { clearString } from "../../utils";
export class BggForumlistForumDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_groupid"] })
    groupid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_lastpostdate"] })
    lastpostdate!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_noposting"] })
    noposting!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numthreads"] })
    numthreads!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numposts"] })
    numposts!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_title"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    title!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_description"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    description!: string;
}