import { BggCollectionDtoParser } from "../../../src/dto";
import { XmlResponseParser } from "../../../src/responseparser";
import { readFixture } from "./BggCollection.fixture";

jest.mock('../../../src/responseparser');

describe('Bgg dto parser', () => {
    test('should parse collection dto', async () => {
        const dtoParser: BggCollectionDtoParser = new BggCollectionDtoParser();

        const jsonString = await readFixture();

        const data = await dtoParser.jsonToDto(JSON.parse(jsonString));

        expect(data).not.toBeNaN();
    });
});