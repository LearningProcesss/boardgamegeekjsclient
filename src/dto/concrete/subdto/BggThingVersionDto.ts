import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggLinkDto } from ".";
import { clearString } from "../../../utils";


export class BggThingVersionDto {

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_type"] })
    type!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["thumbnail"] })
    thumbnail!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["image"] })
    image!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggLinkDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["link"] })
    links!: BggLinkDto[]

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => clearString(value.map(item => item['@_value'])[0])
    })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    yearpublished!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    productcode!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    width!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    length!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    depth!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    weight!: number;
}