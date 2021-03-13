import { JsonAlias, JsonClassType, JsonIgnoreProperties, JsonProperty } from "jackson-js";
import { IBggDto } from "../interface";
import { BggForumlistForumDto } from "./BggForumlistForumDto";

@JsonIgnoreProperties({ value: ['@_termsofuse'] })
export class BggForumlistDto implements IBggDto {

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_type"] })
    type!: string;

    // @JsonProperty()
    // @JsonClassType({ type: () => [Array, [BggForumItem]] })
    // @JsonAlias({ values: ["forum"] })
    // @JsonDeserialize({
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     using: (array: any[]) => array.map((item: { [x: string]: any; }) => ({ id: item['@_id'], groupid: item['@_groupid'], lastpostdate: item['@_lastpostdate'], numthreads: item['@_numthreads'], noposting: item['@_noposting'], numposts: item['@_numposts'] }))
    // })
    // public forums!: BggForumItem[];

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggForumlistForumDto]] })
    @JsonAlias({ values: ["forum"] })
    forums!: BggForumlistForumDto[];
}