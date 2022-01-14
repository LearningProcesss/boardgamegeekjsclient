import fs from 'fs';
import path from 'path';

export const textResponseByEndpoint: Record<string, string> =
{
    "https://www.boardgamegeek.com/xmlapi2/thing?id=174430": fs.readFileSync(path.join(__dirname, '__fixtures__/response_thing_174430.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/thing?id=999999": fs.readFileSync(path.join(__dirname, '__fixtures__/response_notExisting_999999.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/thing?id=35424,35421,234669,328182,322903&type=boardgame&versions=1&comments=1&ratingcomments=1&marketplace=1&stats=1&videos=1&page=1": fs.readFileSync(path.join(__dirname, '__fixtures__/response_thing_multipleids.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/family?id=8374": fs.readFileSync(path.join(__dirname, '__fixtures__/response_family_8374.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/collection?username=mattiabanned": fs.readFileSync(path.join(__dirname, '__fixtures__/response_collection_withoriginalname.xml'), 'utf-8')
}