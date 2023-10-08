import { JsonClassType, JsonDeserialize, JsonIgnoreProperties, JsonProperty } from "jackson-js";
import { clearString } from "../../utils";

@JsonIgnoreProperties({ value: ['@_termsofuse', 'mebers', 'location'] })
export class BggGuildMemberDto {

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    date!: string;
}