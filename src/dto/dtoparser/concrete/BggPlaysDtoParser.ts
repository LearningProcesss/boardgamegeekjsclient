import { JsonParser } from "jackson-js";
import { BggPlayDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggPlayDtoParser implements IDtoParser<BggPlayDto> {
    parser: JsonParser<BggPlayDto>;
    constructor() {
        this.parser = new JsonParser<BggPlayDto>();
    }
    jsonToDto(jsonData: any): Promise<BggPlayDto[]> {
        return new Promise<BggPlayDto[]>((resolve) => {
            resolve(
                this.parser.transform(jsonData.plays, {
                    mainCreator: () => [Array, [BggPlayDto]]
                })
            );
        });
    }

}