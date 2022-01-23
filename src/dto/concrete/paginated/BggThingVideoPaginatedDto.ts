import { JsonAlias, JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggThingVideoDto } from "./BggThingVideoDto";

export class BggThingVideoPaginatedDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_total"] })
    total!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggThingVideoDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["video"] })
    items!: BggThingVideoDto[];
}