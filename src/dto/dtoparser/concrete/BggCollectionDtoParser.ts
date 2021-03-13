import { JsonParser } from "jackson-js";
import { BggCollectionDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggCollectionDtoParser implements IDtoParser<BggCollectionDto> {
    parser: JsonParser<BggCollectionDto>;
    constructor() {
        this.parser = new JsonParser<BggCollectionDto>();
    }
    jsonToDto(jsonData: any): Promise<BggCollectionDto[]> {
        return new Promise<BggCollectionDto[]>((resolve) => {
            resolve(
                this.parser.transform(jsonData.items, {
                    mainCreator: () => [Array, [BggCollectionDto]]
                })
            );
        });
    }

}