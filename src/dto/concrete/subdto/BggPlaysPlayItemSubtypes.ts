import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";
import { clearString } from "../../../utils";

export class BggPlaysPlayItemSubtypes {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    value!: string;
}
