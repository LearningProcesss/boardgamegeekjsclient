import { XmlResponseParser } from "../../../src/responseparser";
import { TextResponseByEndpoint, WriteXmlParseByEndpoint } from "../utils";

describe('XmlResponseParser', () => {
    it('should parse thing response xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        // WriteXmlParseByEndpoint('parsed_xml_thing_174430_withallreqoption', JSON.stringify(parsed, null, 4))

        expect(parsed).not.toBeNaN();
    });
    it('should parse family xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/family?id=8374'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        // WriteXmlParseByEndpoint('parsed_xml_family_8374', JSON.stringify(parsed, null, 4))

        expect(parsed).not.toBeNaN();
    });
});