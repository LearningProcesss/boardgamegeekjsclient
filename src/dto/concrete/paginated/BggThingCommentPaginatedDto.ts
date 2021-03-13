import { JsonAlias, JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";

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

class BggThingCommentDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    value!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_username"] })
    username!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_rating"] })
    rating!: number;
}