import { JsonParser } from "jackson-js";
import { BggHotDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggHotDtoParser implements IDtoParser<BggHotDto> {
    parser: JsonParser<BggHotDto>;
    constructor() {
        this.parser = new JsonParser<BggHotDto>();
    }
    jsonToDto(jsonData: any): Promise<BggHotDto[]> {
        return new Promise<BggHotDto[]>((resolve) => {
            resolve(
                this.parser.transform(jsonData.items[0].item, {
                    mainCreator: () => [Array, [BggHotDto]]
                })
            );
        });
    }
}