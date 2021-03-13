import { JsonAlias, JsonClassType, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { IBggDto } from "../interface";
import { BggCollectionItemDto } from "./subdto";

@JsonIgnoreProperties({ value: ['@_termsofuse'] })
export class BggCollectionDto implements IBggDto {
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_totalitems"] })
    totalitems!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_pubdate"] })
    pubdate!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggCollectionItemDto]] })
    @JsonAlias({ values: ["item"] })
    @JsonManagedReference()
    items!: BggCollectionItemDto[];
}