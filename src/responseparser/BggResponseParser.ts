import { parse, X2jOptions } from 'fast-xml-parser';

export class BggResponseParser {
    private options: Partial<X2jOptions>;

    constructor() {
        this.options = {
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
    }

    async parseXmlToJs(xmlResponse: string): Promise<any> {
        return new Promise<any>((resolve) => {
            resolve(parse(xmlResponse, this.options));
        });
    }
}