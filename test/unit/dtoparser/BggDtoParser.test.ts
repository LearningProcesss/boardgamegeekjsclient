import { BggThingDtoParser, BggCollectionDtoParser, BggFamilyDtoParser, BggForumlistDtoParser, BggForumDtoParser, BggThreadDtoParser, BggUserDtoParser, BggGuildDtoParser, BggPlayDtoParser } from "../../../src/dto";
import { XmlResponseParser } from "../../../src/responseparser";
import { textResponseByEndpoint } from "../ResponseFixtureReader";
import { readFixture } from "./BggCollection.fixture";

// jest.mock('../../../src/responseparser');

describe('BggDtoParsers', () => {

    const xmlToJsonParser = new XmlResponseParser();

    describe('BggThingDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggThingDtoParser = new BggThingDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(174430)
            expect(dto[0].links.length).toBeGreaterThan(1)
            expect(dto[0].polls.length).toBeGreaterThan(1)
        });
    });
    describe('BggFamilyDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/family?id=8374'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggFamilyDtoParser = new BggFamilyDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(8374)
            expect(dto[0].things.length).toBeGreaterThan(1)
        });
    });
    describe('BggForumListDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/forumlist?id=227002&type=thing'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggForumlistDtoParser = new BggForumlistDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(227002)
            expect(dto[0].type).toBe('thing')
            expect(dto[0].forums.length).toBeGreaterThan(1)
        });
    })
    describe('BggForumDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/forum?id=19'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggForumDtoParser = new BggForumDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(19)
            expect(dto[0].threads.length).toBeGreaterThan(1)
            expect(dto[0].noposting).not.toBeNaN()
            expect(dto[0].numthreads).toBeGreaterThan(1)
        });
    });
    describe('BggThreadDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thread?id=1082079&count=10&minarticledate=2021-12-15'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggThreadDtoParser = new BggThreadDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(1082079)
            expect(dto[0].articles.length).toBe(10)
            expect(dto[0].numarticles).toBeGreaterThan(1)
            expect(dto[0].link).toBe('https://boardgamegeek.com/thread/1082079')
        });
    });
    describe('BggUserDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/user?name=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggUserDtoParser = new BggUserDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(1236367)
        });
    });
    describe('BggGuildDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/guild?id=1303&members=1'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggGuildDtoParser = new BggGuildDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(1303)
            expect(dto[0].members.length).toBeGreaterThan(1)
        });
    });
    describe('BggPlayDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/plays?username=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggPlayDtoParser = new BggPlayDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].username).toBe('mattiabanned')
            expect(dto[0].plays.length).toBeGreaterThanOrEqual(1)
        });
    });
    describe('BggCollectionDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = textResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/collection?username=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggCollectionDtoParser = new BggCollectionDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].totalitems).toBeGreaterThanOrEqual(1)
            expect(dto[0].items.length).toBeGreaterThanOrEqual(1)
        });
    });

    test('should parse collection dto', async () => {
        const dtoParser: BggCollectionDtoParser = new BggCollectionDtoParser();

        const jsonString = await readFixture();

        const data = await dtoParser.jsonToDto(JSON.parse(jsonString));

        expect(data).not.toBeNaN();
    });
});