import { IBggDto } from "../interface";
import { JsonAlias, JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnoreProperties, JsonProperty } from "jackson-js";
import { BggGuildMemberDto } from "./BggGuildMemeberDto";

@JsonIgnoreProperties({ value: ['@_termsofuse', 'location'] })
export class BggGuildDto implements IBggDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_name"] })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_created"] })
    created!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    category!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    website!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    manager!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    description!: string;

    @JsonProperty() 
    @JsonClassType({ type: () => [Array, [Object]] })
    @JsonFormat({
        shape: JsonFormatShape.ARRAY
    })
    @JsonDeserialize({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (array: any[]) => array[0].member.map((item: { [x: string]: any; }) => ({ name: item['@_name'], date: item['@_date'] }))
    })
    @JsonAlias({ values: ["members"] })
    members!: BggGuildMemberDto[]
}