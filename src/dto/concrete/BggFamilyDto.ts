import { JsonAlias, JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";
import { IBggDto } from "../interface";
import { BggLinkDto } from "./subdto";
export class BggFamilyDto implements IBggDto {

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
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
    @JsonClassType({ type: () => [String] })
    value!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggLinkDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["link"] })
    things!: BggLinkDto[]
}