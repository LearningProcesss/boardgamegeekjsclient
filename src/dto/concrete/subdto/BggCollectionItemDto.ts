import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggCollectionItemStatusDto } from "./BggCollectionItemStatusDto";

export class BggCollectionItemDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_objectid"] })
    objectid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_collid"] })
    collid!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_objecttype"] })
    objecttype!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_subtype"] })
    subtype!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    yearpublished!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    numplays!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    image!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    thumbnail!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    comment!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['#text'])[0]
    })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    originalname!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [BggCollectionItemStatusDto] })
    @JsonDeserialize({
        using: (value: any[]) => value[0]
    })
    @JsonManagedReference()
    status!: BggCollectionItemStatusDto;
}