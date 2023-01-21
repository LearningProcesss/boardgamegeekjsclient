import { IBggDto } from "../interface";
import { JsonAlias, JsonClassType, JsonDeserialize, JsonIgnoreProperties, JsonProperty } from "jackson-js";

@JsonIgnoreProperties({ value: ['@_termsofuse'] })
export class BggUserDto implements IBggDto {
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
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    firstname!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    lastname!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    avatarlink!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    yearregistered!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    lastlogin!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    stateorprovince!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    country!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    webaddress!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    xboxaccount!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    wiiaccount!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    psnaccount!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    battlenetaccount!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    steamaccount!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    traderating!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    marketrating?: string;

}