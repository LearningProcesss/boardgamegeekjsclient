import { JsonParser } from "jackson-js";
import { BggGuildDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggGuildDtoParser implements IDtoParser<BggGuildDto> {
    parser: JsonParser<BggGuildDto>;
    constructor() {
        this.parser = new JsonParser<BggGuildDto>();
    }
    jsonToDto(jsonData: any): Promise<BggGuildDto[]> {
        return new Promise<BggGuildDto[]>((resolve) => {
            resolve(
                this.parser.transform(jsonData.guild, {
                    mainCreator: () => [Array, [BggGuildDto]]
                })
            );
        });
    }

}