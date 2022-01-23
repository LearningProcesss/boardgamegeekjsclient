import { JsonAlias, JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggThingCommentDto } from "./BggThingCommentDto";

export class BggThingCommentPaginatedDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_page"] })
    page!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_totalitems"] })
    totalitems!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggThingCommentDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["comment"] })
    items!: BggThingCommentDto[];
}