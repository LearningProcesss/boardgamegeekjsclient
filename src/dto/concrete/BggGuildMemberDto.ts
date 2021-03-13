import { JsonClassType, JsonIgnoreProperties, JsonProperty } from "jackson-js";

@JsonIgnoreProperties({ value: ['@_termsofuse', 'mebers', 'location'] })
export class BggGuildMemberDto {

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    date!: string;
}