import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";
import { IBggDto } from "../interface";
import { BggLinkDto } from "./subdto";
import { clearString } from "../../utils";

export class BggFamilyDto implements IBggDto {

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["name"] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items.filter(item => item['@_type'] === 'primary' && item['@_sortindex'] === 1)[0]['@_value']
    })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    description!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    thumbnail!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    image!: string;
    
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_type"] })
    type!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggLinkDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["link"] })
    things!: BggLinkDto[]
}