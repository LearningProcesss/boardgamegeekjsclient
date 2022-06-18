import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";


export class BggSearchItemDto {
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
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    yearpublished!: number;
}