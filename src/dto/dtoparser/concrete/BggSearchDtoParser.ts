import { JsonParser } from "jackson-js";
import { BggSearchDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggSearchDtoParser implements IDtoParser<BggSearchDto> {
    parser: JsonParser<BggSearchDto>;
    constructor() {
        this.parser = new JsonParser<BggSearchDto>();
    }
    jsonToDto(jsonData: any): Promise<BggSearchDto[]> {
        return new Promise<BggSearchDto[]>((resolve) => {
            resolve(
                this.parser.transform(jsonData.items, {
                    mainCreator: () => [Array, [BggSearchDto]]
                })
            );
        });
    }

}