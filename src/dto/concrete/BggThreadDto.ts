import { IBggDto } from "../interface";
import { JsonAlias, JsonClassType, JsonDeserialize, JsonIgnoreProperties, JsonProperty } from "jackson-js";
import { BggArticleDto } from "./BggArticleDto";

@JsonIgnoreProperties({ value: ['@_termsofuse'] })
export class BggThreadDto implements IBggDto {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_id"] })
    id: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_link"] })
    link?: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numarticles"] })
    numarticles?: number;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["subject"] })
    subject?: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggArticleDto]] })
    @JsonAlias({ values: ["articles"] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: any[]) => items[0]?.article
    })
    articles?: BggArticleDto[];
}