import { BggThingDtoParser, BggCollectionDtoParser } from "../../../src/dto";
import { XmlResponseParser } from "../../../src/responseparser";
import { textResponseByEndpoint } from "../ResponseFixtureReader";
import { readFixture } from "./BggCollection.fixture";

// jest.mock('../../../src/responseparser');

describe('BggDtoParsers', () => {

    const xmlToJsonParser = new XmlResponseParser();

    describe('BggThingDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const thingXmlResp: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430'];

            const jsonData = await xmlToJsonParser.parseResponse(thingXmlResp);

            const dtoParser: BggThingDtoParser = new BggThingDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto[0].id).toBe(174430)
            expect(dto[0].links.length).toBeGreaterThan(1)
            expect(dto[0].polls.length).toBeGreaterThan(1)
        });
    });

    test('should parse collection dto', async () => {
        const dtoParser: BggCollectionDtoParser = new BggCollectionDtoParser();

        const jsonString = await readFixture();

        const data = await dtoParser.jsonToDto(JSON.parse(jsonString));

        expect(data).not.toBeNaN();
    });
});