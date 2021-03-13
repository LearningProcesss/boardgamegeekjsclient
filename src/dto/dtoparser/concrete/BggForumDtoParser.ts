import { JsonParser } from "jackson-js";
import { BggForumDto } from "../../concrete";
import { IDtoParser } from "../interface";

export class BggForumDtoParser implements IDtoParser<BggForumDto> {
    parser: JsonParser<BggForumDto>;
    constructor() {
        this.parser = new JsonParser<BggForumDto>();
    }
    jsonToDto(jsonData: any): Promise<BggForumDto[]> {
        return new Promise<BggForumDto[]>((resolve) => {
            resolve(
                this.parser.transform(jsonData.forum, {
                    mainCreator: () => [Array, [BggForumDto]]
                })
            );
        });
    }

}