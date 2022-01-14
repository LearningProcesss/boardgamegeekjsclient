import { BggCollectionClient, BggFamilyClient, BggThingClient } from '../../../src/client';
import { BggCollectionDtoParser, BggFamilyDtoParser, BggThingDtoParser } from '../../../src/dto';
import { TextFetcher } from '../../../src/fetcher';
import { GenericBuilder } from '../../../src/query';
import { ICollectionRequest, IFamilyRequest, IThingRequest } from '../../../src/request';
import { XmlResponseParser } from '../../../src/responseparser';
import { textResponseByEndpoint } from '../ResponseFixtureReader';

const textFetcherStub: TextFetcher = new TextFetcher();

textFetcherStub.doFetch = jest.fn((query: string) => {
    return new Promise((resolve) => {
        resolve(textResponseByEndpoint[query]);
    });
});

describe('Test clients with dependencies', () => {
    describe('IBggThingClient', () => {
        const thingClient: BggThingClient = new BggThingClient(new GenericBuilder<IThingRequest>(), textFetcherStub, new XmlResponseParser(), new BggThingDtoParser());

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
        test('should query Thing endpoint with originalname property', async () => {
            
        });
    });
    describe('IBggFamilyClient', () => {
        const familyClient: BggFamilyClient = new BggFamilyClient(new GenericBuilder<IFamilyRequest>(), textFetcherStub, new XmlResponseParser(), new BggFamilyDtoParser());

        test('should query Family endpoint and get an array of single item with id 8374', async () => {
            const data = await familyClient.query({ id: 8374 });

            const { id } = data[0];

            expect(data.length).toBe(1);
            expect(id).toBe(8374);
        });
    });
    describe('IBggCollectionClient', () => {
        const client: BggCollectionClient = new BggCollectionClient(new GenericBuilder<ICollectionRequest>(), textFetcherStub, new XmlResponseParser(), new BggCollectionDtoParser());

        test('should get collection information that contains property originalname', async () => {
            const data = await client.query({ username: "mattiabanned" });
        });
    });
});
