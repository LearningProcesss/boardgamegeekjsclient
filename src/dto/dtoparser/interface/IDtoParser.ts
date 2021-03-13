import { JsonParser } from "jackson-js";

export interface IDtoParser<T> {
    parser: JsonParser<T>;
    jsonToDto(jsonData: any): Promise<T[]>;
}