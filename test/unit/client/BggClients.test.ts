import { BggHotClient, BggSearchClient } from '../../../src/client';
import { BggHotDto, BggHotDtoParser, BggSearchDto, BggSearchDtoParser } from '../../../src/dto';
import { TextFetcher } from '../../../src/fetcher';
import { GenericQueryBuilder } from '../../../src/query';
import { IHotItemsRequest, ISearchRequest } from '../../../src/request';
import { XmlResponseParser } from '../../../src/responseparser';
import { TextResponseByEndpoint } from '../utils';

jest.mock('../../../src/fetcher')
jest.mock('../../../src/responseparser')
jest.mock('../../../src/dto')

const textFetcherMock = TextFetcher as jest.MockedClass<typeof TextFetcher>
const xmlResponseParserMock = XmlResponseParser as jest.MockedClass<typeof XmlResponseParser>

beforeEach(() => {
    jest.clearAllMocks();
});

describe('BggClients', () => {
    describe('IBggSearchClient', () => {

        const dtoParserMock = BggSearchDtoParser as jest.MockedClass<typeof BggSearchDtoParser>

        const searchClient: BggSearchClient = new BggSearchClient(new GenericQueryBuilder<ISearchRequest>(), textFetcherMock.prototype, xmlResponseParserMock.prototype, dtoParserMock.prototype);

        test('should call dependency one times each', async () => {
            textFetcherMock.prototype.doFetch.mockImplementation((query) => {
                return new Promise((resolve) => {
                    resolve(TextResponseByEndpoint[query]);
                });
            })

            xmlResponseParserMock.prototype.parseResponse.mockResolvedValue({})

            dtoParserMock.prototype.jsonToDto.mockResolvedValue([])

            const data: BggSearchDto[] = await searchClient.query({ query: "Gloom" });

            expect(textFetcherMock.prototype.doFetch).toHaveBeenCalledTimes(1);
            expect(xmlResponseParserMock.prototype.parseResponse).toHaveBeenCalledTimes(1);
            expect(dtoParserMock.prototype.jsonToDto).toHaveBeenCalledTimes(1);
            expect(data.length > 0);
        });
    });
    describe('IBggHotClient', () => {

        const dtoParserMock = BggHotDtoParser as jest.MockedClass<typeof BggHotDtoParser>

        const hotClient: BggHotClient = new BggHotClient(new GenericQueryBuilder<IHotItemsRequest>(), textFetcherMock.prototype, xmlResponseParserMock.prototype, dtoParserMock.prototype);

        test('should call dependency one times each', async () => {
            textFetcherMock.prototype.doFetch.mockImplementation((query) => {
                return new Promise((resolve) => {
                    resolve(TextResponseByEndpoint[query]);
                });
            })

            xmlResponseParserMock.prototype.parseResponse.mockResolvedValue({})

            dtoParserMock.prototype.jsonToDto.mockResolvedValue([])

            const data: BggHotDto[] = await hotClient.query({ type: 'boardgame' });

            expect(textFetcherMock.prototype.doFetch).toHaveBeenCalledTimes(1);
            expect(xmlResponseParserMock.prototype.parseResponse).toHaveBeenCalledTimes(1);
            expect(dtoParserMock.prototype.jsonToDto).toHaveBeenCalledTimes(1);
            expect(data.length > 0);
        });
    });
});
