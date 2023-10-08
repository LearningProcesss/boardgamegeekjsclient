import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js"
import { clearString } from "../../utils";

export class BggArticleDto {
    
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_username"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    username!:string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["body"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    body!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["subject"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    subject!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numedits"] })
    numedits!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_editdate"] })
    editdate!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_postdate"] })
    postdate!: string;
    
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_link"] })
    link!: string;
}