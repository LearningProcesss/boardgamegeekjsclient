import { IBggThingClient, BggThingClient } from "../../../src/client";
import { BggThingDtoParser } from "../../../src/dto";
import { TextFetcher } from "../../../src/fetcher";
import { RequestPaginator } from "../../../src/paginator";
import { GenericQueryBuilder } from "../../../src/query";
import { IThingRequest } from "../../../src/request";
import { XmlResponseParser } from "../../../src/responseparser";
import { TextResponseByEndpoint } from "../utils";
import { thingsId } from "../__fixtures__/data";

jest.mock('../../../src/fetcher')
jest.mock('../../../src/responseparser')
jest.mock('../../../src/dto')


const textFetcherMock = TextFetcher as jest.MockedClass<typeof TextFetcher>
const xmlResponseParserMock = XmlResponseParser as jest.MockedClass<typeof XmlResponseParser>
const bggThingDtoParserMock = BggThingDtoParser as jest.MockedClass<typeof BggThingDtoParser>
const requestPaginatorMock = RequestPaginator as jest.MockedClass<typeof RequestPaginator>

beforeEach(() => {
    jest.clearAllMocks();
});

describe('IBggThingClient', () => {
    const thingClient: IBggThingClient = new BggThingClient(new GenericQueryBuilder<IThingRequest>(),
        textFetcherMock.prototype,
        xmlResponseParserMock.prototype,
        bggThingDtoParserMock.prototype,
        new RequestPaginator());

    textFetcherMock.prototype.doFetch.mockImplementation((query) => {
        return new Promise((resolve) => {
            resolve(TextResponseByEndpoint[query]);
        });
    })

    xmlResponseParserMock.prototype.parseResponse.mockResolvedValue({});

    bggThingDtoParserMock.prototype.jsonToDto.mockResolvedValue([]);

    // test('should call dependency one times each', async () => {
    //     textFetcherMock.prototype.doFetch.mockImplementation((query) => {
    //         return new Promise((resolve) => {
    //             resolve(TextResponseByEndpoint[query]);
    //         });
    //     })

    //     xmlResponseParserMock.prototype.parseResponse.mockResolvedValue({})

    //     bggThingDtoParserMock.prototype.jsonToDto.mockResolvedValue([])

    //     const data = await thingClient.query({ id: 174430 });

    //     expect(textFetcherMock.prototype.doFetch).toHaveBeenCalledTimes(1);
    //     expect(xmlResponseParserMock.prototype.parseResponse).toHaveBeenCalledTimes(1);
    //     expect(bggThingDtoParserMock.prototype.jsonToDto).toHaveBeenCalledTimes(1);
    // });
    test('should report progress one time with main progressHandler', async () => {
        let count = 0;

        thingClient.progressHandler = (_data) => {
            count++;
        };

        await thingClient.queryWithProgress({ id: 250621 });

        expect(count).toEqual(1);
    });
    test('should report progress one time with function progressHandler', async () => {
        let count = 0;

        await thingClient.queryWithProgress({ id: 250621 }, { limit: 1 }, (_data) => {
            count++;
        });

        expect(count).toEqual(1);
    });
    test('should report progress multiple times with main progressHandler', async () => {
        let count = 0;

        thingClient.progressHandler = (_data) => {
            count++;
        };

        await thingClient.queryWithProgress({ id: [...thingsId] }, { limit: 50 });

        expect(count).toBeGreaterThanOrEqual(33);
    });
    test('should report progress multiple times with function progressHandler', async () => {
        let count = 0;

        await thingClient.queryWithProgress({ id: [...thingsId.slice(0, 10)] }, { limit: 1 }, (_data) => {
            count++;
        });

        expect(count).toBeGreaterThanOrEqual(10);
    });
    test('should report progress with model', async () => {
        let data;

        await thingClient.queryWithProgress({ id: 250621 }, { limit: 1 }, (_data) => {
            data = _data;
        })

        expect(data).toMatchObject({
            current: expect.any(Number),
            total: expect.any(Number),
            data: expect.any(Array)
        });
    });
    // test('should not throw error', async () => {
    //     const dtoList = await thingClient.query({ id: 21659, versions: 1 });
        
    //     expect(dtoList?.length).toBe(1);
    // });
    // test('should invoke paginator when request ids is long', async () => {
    //     const thingClient: IBggThingClient = new BggThingClient(new GenericQueryBuilder<IThingRequest>(),
    //     textFetcherMock.prototype,
    //     xmlResponseParserMock.prototype,
    //     bggThingDtoParserMock.prototype,
    //     requestPaginatorMock.prototype);

    //     const mockedValue: PaginationRequestDto<IThingRequest>[] = [];

    //     requestPaginatorMock.prototype.paginate.mockImplementation((_request, _limit) => mockedValue);

    //     await thingClient.query({ id: [...thingsId] });

    //     expect(requestPaginatorMock.prototype.paginate).toHaveBeenCalledTimes(1);
    // });
});