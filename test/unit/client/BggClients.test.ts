import fs from 'fs';
import path from 'path';
import { BggFamilyClient, BggThingClient } from '../../../src/client';
import { BggFamilyDtoParser, BggThingDtoParser } from '../../../src/dto';
import { TextFetcher } from '../../../src/fetcher';
import { GenericBuilder } from '../../../src/query';
import { IFamilyRequest, IThingRequest } from '../../../src/request';
import { XmlResponseParser } from '../../../src/responseparser';

const textResponseByEndpoint: Record<string, string> =
{
    "https://www.boardgamegeek.com/xmlapi2/thing?id=174430": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_174430.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/thing?id=999999": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_notExisting_999999.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/thing?id=35424,35421,234669,328182,322903&type=boardgame&versions=1&comments=1&ratingcomments=1&marketplace=1&stats=1&videos=1&page=1": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_multipleids.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/family?id=8374": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_family_8374.xml'), 'utf-8'),
    // "https://www.boardgamegeek.com/xmlapi2/family?id=8374,22184,59218,1029,2076&type=boardgamefamily": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_family_multipleids.xml'), 'utf-8')
}

const mockedFetcher: TextFetcher = new TextFetcher();

mockedFetcher.doFetch = jest.fn((query: string) => {
    return new Promise((resolve) => {
        resolve(textResponseByEndpoint[query]);
    });
});

describe('Test clients with dependencies', () => {
    describe('IBggThingClient', () => {
        const thingClient: BggThingClient = new BggThingClient(new GenericBuilder<IThingRequest>(), mockedFetcher, new XmlResponseParser(), new BggThingDtoParser());

        test('should query Thing endpoint and get an array of single item with id 174430', async () => {
            const data = await thingClient.query({ id: 174430 });

            const { id } = data[0];

            expect(data.length).toBe(1);
            expect(thingClient.fetcher.doFetch).toHaveBeenCalledTimes(1);
            expect(id).toBe(174430);
        });
        test('should query Thing endpoint and get undefined if id not exists', async () => {
            const data = await thingClient.query({ id: 999999 });

            expect(data).toBe(undefined);
        });
        test('should query Thing endpoint whit multiple ids with filter of type', async () => {
            const data = await thingClient.query({ id: [35424, 35421, 234669, 328182, 322903], type: "boardgame", versions: 1, comments: 1, ratingcomments: 1, marketplace: 1, stats: 1, videos: 1, page: 1 });

            expect(data.length).toBe(2);
            expect(data[0].id).toBe(35421);
            expect(data[1].id).toBe(234669);
        });
    });
    describe('IBggFamilyClient', () => {
        const familyClient: BggFamilyClient = new BggFamilyClient(new GenericBuilder<IFamilyRequest>(), mockedFetcher, new XmlResponseParser(), new BggFamilyDtoParser());

        test('should query Family endpoint and get an array of single item with id 8374', async () => {
            const data = await familyClient.query({ id: 8374 });

            const { id } = data[0];

            expect(data.length).toBe(1);
            expect(id).toBe(8374);
        });
        // test('should query Family endpoint whit multiple ids with filter of type', async () => {
        //     const data = await familyClient.query({ id: [8374, 22184, 59218, 1029, 2076], type: "boardgamefamily" });

        //     expect(data.length).toBe(3);
        //     expect(data[0].id).toBe(8374);
        //     expect(data[1].id).toBe(22184);
        //     expect(data[2].id).toBe(59218);
        // });
    });
});
