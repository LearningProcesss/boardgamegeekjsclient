import { IBggDto } from "../interface";
import { JsonAlias, JsonClassType, JsonDeserialize, JsonIgnoreProperties, JsonProperty } from "jackson-js";
import { BggForumThreadDto } from "./BggForumThreadDto";

@JsonIgnoreProperties({ value: ['@_termsofuse'] })
export class BggForumDto implements IBggDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_lastpostdate"] })
    lastpostdate!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_noposting"] })
    noposting!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numthreads"] })
    numthreads!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numposts"] })
    numposts!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_title"] })
    title!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggForumThreadDto]] })
    @JsonAlias({ values: ["threads"] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]?.thread
    })
    threads!: BggForumThreadDto[];

}