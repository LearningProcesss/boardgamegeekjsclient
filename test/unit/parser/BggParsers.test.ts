import { parse } from "fast-xml-parser";
import { XmlResponseParser } from "../../../src/responseparser";
import { TextResponseByEndpoint, WriteXmlParseByEndpoint } from "../utils";

describe('XmlResponseParser', () => {
    it('should parse thing response xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);
        
        expect(parsed).not.toBeNaN();
    });
    it('should parse family xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/family?id=8374'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        expect(parsed).not.toBeNaN();
    });
    it('should parse play xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/plays?username=mattiabanned'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        expect(parsed).not.toBeNaN();
    });
    it('should parse search xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/search?query=gloom'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        expect(parsed).not.toBeNaN();
    });
    it('should parse hot items xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/hot?type=boardgame'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        expect(parsed).not.toBeNaN();
    });
    it('test', async () => {
        const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=21659&versions=1'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);
        
        expect(parsed).not.toBeNaN();
    });
});