import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggPlaysPlayItemSubtypes } from "./BggPlaysPlayItemSubtypes";

export class BggPlaysPlayItemDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_name"] })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_objecttype"] })
    objecttype!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_objectid"] })
    objectid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggPlaysPlayItemSubtypes]] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]?.subtype
    })
    @JsonManagedReference()
    subtypes!: BggPlaysPlayItemSubtypes[];
}
