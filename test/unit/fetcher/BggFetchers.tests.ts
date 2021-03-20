import { TextFetcher } from "../../../src/fetcher";

describe('Bgg response fetcher', () => {
    jest.setTimeout(20000); 
    test('should fetch collection text to json', async () => {
        const fetcher: TextFetcher = new TextFetcher();
        const textResponse = await fetcher.doFetch('https://www.boardgamegeek.com/xmlapi2/thing?id=174430');
        expect(textResponse.length).toBeGreaterThan(1);
    });
});