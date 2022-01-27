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

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggForumlistForumDto]] })
    @JsonAlias({ values: ["forum"] })
    forums!: BggForumlistForumDto[];
}