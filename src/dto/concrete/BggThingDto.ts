import { JsonAlias, JsonClassType, JsonDeserialize, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { IBggDto } from "../interface";
import { BggPollDto } from "./subdto/BggPollDto";
import { BggStatisticsPaginatedDto, BggThingVideoPaginatedDto, BggThingCommentPaginatedDto} from "./paginated";
import { BggLinkDto, BggThingMarketlistingsDto, BggThingVersionDto } from "./subdto";

export class BggThingDto implements IBggDto {

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_type"] })
    type!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    description!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    thumbnail!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    image!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    yearpublished!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    minplayers!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    maxplayers!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    playingtime!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    minplaytime!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    maxplaytime!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonDeserialize({
        using: (value: []) => value.map(item => item['@_value'])[0]
    })
    minage!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggLinkDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["link"] })
    links!: BggLinkDto[]

    @JsonProperty()
    @JsonClassType({ type: () => [BggStatisticsPaginatedDto] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]
    })
    statistics!: BggStatisticsPaginatedDto;

    @JsonProperty()
    @JsonClassType({ type: () => [BggThingVideoPaginatedDto] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]
    })
    videos!: BggThingVideoPaginatedDto;

    @JsonProperty()
    @JsonClassType({ type: () => [BggThingCommentPaginatedDto] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]
    })
    comments!: BggThingCommentPaginatedDto;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggThingMarketlistingsDto]] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0].listing
    })
    marketplacelistings!: BggThingMarketlistingsDto[];

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggPollDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["poll"] })
    polls!: BggPollDto[]

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggThingVersionDto]] })
    @JsonManagedReference()
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0].item
    })
    versions!: BggThingVersionDto[];
}