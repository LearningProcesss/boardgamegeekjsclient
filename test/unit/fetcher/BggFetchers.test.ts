import { TextFetcher } from "../../../src/fetcher";

describe('Bgg response fetcher', () => {

    const fetcher: TextFetcher = new TextFetcher();
    test('should fetch collection text to json', async () => {

        const textResponse = await fetcher.doFetch('https://www.boardgamegeek.com/xmlapi2/collection?username=MattiaBanned');

        expect(textResponse.length).toBeGreaterThan(1);
    });
});