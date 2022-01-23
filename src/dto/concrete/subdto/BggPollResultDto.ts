import { JsonAlias, JsonClassType, JsonManagedReference, JsonProperty } from "jackson-js";
import { BggPollResultItemDto } from "./BggPollResultItemDto";

export class BggPollResultDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_numplayers"] })
    numplayers!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [BggPollResultItemDto]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["result"] })
    resultItemList!: BggPollResultItemDto[]
}