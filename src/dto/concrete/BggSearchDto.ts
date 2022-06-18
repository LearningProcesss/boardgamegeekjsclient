import { JsonAlias, JsonClassType, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { IBggDto } from "../interface";
import { BggSearchItemDto } from "./subdto";

@JsonIgnoreProperties({ value: ['@_termsofuse'] })
export class BggSearchDto implements IBggDto {

    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_total"] })
    total!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggSearchItemDto]] })
    @JsonAlias({ values: ["item"] })
    @JsonManagedReference()
    items!: BggSearchItemDto[];
}