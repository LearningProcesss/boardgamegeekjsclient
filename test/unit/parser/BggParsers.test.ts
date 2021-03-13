import { XmlResponseParser } from "../../../src/responseparser";
import { readFixture } from "./BggCollection.fixture";

describe('Bgg response parser', () => {
    test('should parse an xml to json', async () => {
        const xmlResponse = await readFixture();

        const parser: XmlResponseParser = new XmlResponseParser();

        const parsed = await parser.parseResponse(xmlResponse);

        expect(parsed).not.toBeNaN();
    });
});