import { XmlResponseParser } from "../../../src/responseparser";
import { textResponseByEndpoint } from "../ResponseFixtureReader";

describe('XmlResponseParser', () => {
    it('should parse xml to json when xml response is correctly formatted', async () => {

        const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430'];

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        expect(parsed).not.toBeNaN();
    });
});