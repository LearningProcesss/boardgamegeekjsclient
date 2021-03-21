import { TextFetcher } from "../../../src/fetcher";
import fs from 'fs';
import path from 'path';

const textResponseByEndpoint: Record<string, string> =
{
    "https://www.boardgamegeek.com/xmlapi2/thing?id=174430": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_174430.xml'), 'utf-8')
}

const fetcher: TextFetcher = new TextFetcher();

fetcher.doFetch = jest.fn((query: string) => {
    return new Promise((resolve) => {
        resolve(textResponseByEndpoint[query]);
    });
});

describe('Bgg response fetcher', () => {
    test('should fetch thing endpoint and get text response', async () => {
        const query = 'https://www.boardgamegeek.com/xmlapi2/thing?id=174430';
        await fetcher.doFetch(query);
        expect(fetcher.doFetch).toHaveBeenCalledTimes(1);
    });
});