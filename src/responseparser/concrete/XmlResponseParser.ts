import { X2jOptions, parse } from "fast-xml-parser";
import { IResponseParser } from "../interface";

export class XmlResponseParser implements IResponseParser<string, any> {
    options: Partial<X2jOptions> = {
        attributeNamePrefix: "@_",
        // attrNodeName: "attr",
        textNodeName: "#text",
        ignoreAttributes: false,
        ignoreNameSpace: true,
        allowBooleanAttributes: true,
        parseNodeValue: true,
        parseAttributeValue: true,
        trimValues: true,
        cdataTagName: "__cdata",
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: true,
        stopNodes: ["parse-me-as-string"]
    };
    parseResponse(response: string): Promise<any> {
        return new Promise<any>(resolve => {
            resolve(parse(response, this.options));
        });
    }
}