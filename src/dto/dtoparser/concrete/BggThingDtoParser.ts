import { JsonParser } from "jackson-js";
import { BggThingDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggThingDtoParser implements IDtoParser<BggThingDto> {
    parser: JsonParser<BggThingDto>;
    constructor() {
        this.parser = new JsonParser<BggThingDto>();
    }
    jsonToDto(jsonData: any): Promise<BggThingDto[]> {
        return new Promise<BggThingDto[]>((resolve) => {
            resolve(
              this.parser.transform(jsonData.items[0].item, {
                mainCreator: () => [Array, [BggThingDto]]
              })
            );
        });
    }

}