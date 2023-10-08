import { TextFetcher } from "../../../src/fetcher";
import fs from 'fs';
import path from 'path';

const textResponseByEndpoint: Record<string, string> =
{
    "https://www.boardgamegeek.com/xmlapi2/thing?id=174430": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_174430.xml'), 'utf-8')
}

const fetcherStub: TextFetcher = new TextFetcher();

fetcherStub.doFetch = jest.fn((query: string) => {
    return new Promise((resolve) => {
        resolve(textResponseByEndpoint[query]);
    });
});

describe('Bgg response fetcher', () => {
    test('should fetch thing endpoint and get text response', async () => {
        const query = 'https://www.boardgamegeek.com/xmlapi2/thing?id=174430';
        await fetcherStub.doFetch(query);
        expect(fetcherStub.doFetch).toHaveBeenCalledTimes(1);
    });
    test('should fetch thing endpoint and get text response 2', async () => {
        const query = 'https://www.boardgamegeek.com/xmlapi2/plays?username=mattiabanned';
        const resp = await fetcherStub.doFetch(query);
        // console.dir(resp, { depth: null });
        expect(resp).not.toBeNull();
    });
});