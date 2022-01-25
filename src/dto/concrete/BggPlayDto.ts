import { JsonAlias, JsonClassType, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { IBggDto } from "../interface";
import { BggPlaysPlayDto } from "./subdto";

@JsonIgnoreProperties({ value: ['@_termsofuse'] })
export class BggPlayDto implements IBggDto {

    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_userid"] })
    userid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_total"] })
    total!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_page"] })
    page!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_username"] })
    username!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggPlaysPlayDto]] })
    @JsonAlias({ values: ["play"] })
    @JsonManagedReference()
    plays!: BggPlaysPlayDto[];
}