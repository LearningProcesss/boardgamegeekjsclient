import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggPlaysPlayItemDto } from "./BggPlaysPlayItemDto";
import { BggPlaysPlayPlayerDto } from "./BggPlaysPlayPlayerDto";

export class BggPlaysPlayDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_userid"] })
    userid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_date"] })
    date!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_quantity"] })
    quantity!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_length"] })
    length!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_incomplete"] })
    incomplete!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_nowinstats"] })
    nowinstats!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_location"] })
    location!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [BggPlaysPlayItemDto] })
    @JsonAlias({ values: ["item"] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]
    })
    item!: BggPlaysPlayItemDto;

    @JsonProperty()
    @JsonClassType({ type: () => [BggPlaysPlayItemDto] })
    @JsonAlias({ values: ["players"] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0].player
    })
    players!: BggPlaysPlayPlayerDto[];
}