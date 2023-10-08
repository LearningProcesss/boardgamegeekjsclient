import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggCollectionItemStatsDto, BggCollectionItemStatusDto } from ".";
import { clearString } from "../../../utils";

export class BggCollectionItemDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_objectid"] })
    objectid: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_collid"] })
    collid: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_objecttype"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    objecttype: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_subtype"] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    subtype: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    yearpublished: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    numplays: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    image: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    thumbnail: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    comment: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    wishlistcomment: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => clearString(value.map(item => item['#text'])[0])
    })
    name: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    originalname: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    wantpartslist: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    haspartslist: string;

    @JsonProperty()
    @JsonClassType({ type: () => [BggCollectionItemStatusDto] })
    @JsonDeserialize({
        using: (value: any[]) => value[0]
    })
    @JsonManagedReference()
    status: BggCollectionItemStatusDto;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({using: (value: string) => clearString(value)})
    conditiontext: string;

    @JsonProperty()
    @JsonClassType({ type: () => [BggCollectionItemStatsDto] })
    @JsonDeserialize({
        using: (value: any[]) => value[0]
    })
    @JsonManagedReference()
    stats: BggCollectionItemStatsDto;
}