import { JsonAlias, JsonClassType, JsonDeserialize, JsonProperty } from "jackson-js";

export class BggThingMarketlistingsDto {
    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["condition"] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    condition!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Object, [String, String]] })
    @JsonAlias({ values: ["link"] })
    @JsonDeserialize({
        // using: (items: any[]) => { const item = items[0]; return { href: item[""] }  }

        // using: (items: any[]) => items.map(({ foo }) => foo)[0]
        using: (items: any[]) => items.map(item => ({ href: item['@_href'], title: item['@_title'] }))[0]
    })
    link!: {
        href: string,
        title: string
    };

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["listdate"] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    listdate!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [String] })
    @JsonAlias({ values: ["notes"] })
    @JsonDeserialize({
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        using: (items: []) => items.map(item => item['@_value'])[0]
    })
    notes!: string;

    @JsonProperty()
    @JsonClassType({ type: () => [Object, [String, Number]] })
    @JsonAlias({ values: ["price"] })
    @JsonDeserialize({
        // using: (items: any[]) => { const item = items[0]; return { href: item[""] }  }

        // using: (items: any[]) => items.map(({ foo }) => foo)[0]
        using: (items: any[]) => items.map(item => ({ currency: item['@_currency'], value: item['@_value'] }))[0]
    })
    price!: {
        currency: string,
        value: number
    };
}