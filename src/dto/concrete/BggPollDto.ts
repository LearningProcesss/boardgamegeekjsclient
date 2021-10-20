import { JsonAlias, JsonClassType, JsonDeserialize, JsonManagedReference, JsonProperty } from "jackson-js";

export class BggPollDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_name"] })
    name!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_title"] })
    title!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_totalvotes"] })
    totalvotes!: string;

    // @JsonProperty()
    // @JsonClassType({ type: () => [Array, [PollResults]] })
    // @JsonDeserialize({
    //     //eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     using: (items: any[]) => items[1].result
    // })
    // results!: PollResults[];

    @JsonProperty()
    @JsonClassType({ type: () => [Array, [PollResults]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["results"] })
    results!: PollResults[]
}

class PollResults {
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numplayers"] })
    numplayers!: number;
  
    @JsonProperty()
    @JsonClassType({ type: () => [Array, [PollResultItems]] })
    @JsonManagedReference()
    @JsonAlias({ values: ["result"] })
    result!: PollResultItems[];
  }
  
  class PollResultItems{
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["@_value"] })
    value!: string;
    
    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_numvotes"] })
    numvotes!: number;

    @JsonProperty()
    @JsonClassType({ type: () => [Number] })
    @JsonAlias({ values: ["@_level"] })
    level!: number;
  }