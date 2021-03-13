import { JsonParser } from "jackson-js";
import { BggThreadDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggThreadDtoParser implements IDtoParser<BggThreadDto> {
    parser: JsonParser<BggThreadDto>;
    constructor() {
        this.parser = new JsonParser<BggThreadDto>();
    }
    jsonToDto(jsonData: any): Promise<BggThreadDto[]> {
        return new Promise<BggThreadDto[]>((resolve) => {
            resolve(
                this.parser.transform(jsonData.thread, {
                    mainCreator: () => [Array, [BggThreadDto]]
                })
            );
        });
    }
}