import fs from 'fs';
import path from 'path';

export const TextResponseByEndpoint: Record<string, string> =
{
    'https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_174430_withallrequestoptions.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1&withmissings': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_174430_withallrequestoptions_withmissings.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/collection?username=mattiabanned': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_collection.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/plays?username=mattiabanned': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_play.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/guild?id=1303&members=1': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_guild_with_members.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/user?name=mattiabanned': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_user.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/thread?id=1082079&count=10&minarticledate=2021-12-15': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thread_1082079.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/forum?id=19': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_forum_19_page1.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/forumlist?id=227002&type=thing': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_forumlist_227002_thing.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/thing?id=174430": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_174430.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/thing?id=999999": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_notExisting_999999.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/thing?id=35424,35421,234669,328182,322903&type=boardgame&versions=1&comments=1&ratingcomments=1&marketplace=1&stats=1&videos=1&page=1": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_multipleids.xml'), 'utf-8'),
    "https://www.boardgamegeek.com/xmlapi2/family?id=8374": fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_family_8374.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/search?query=gloom': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_search_gloom.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/hot?type=boardgame': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_hotitems_boardgame.xml'), 'utf-8'),
    'https://www.boardgamegeek.com/xmlapi2/thing?id=21659&versions=1': fs.readFileSync(path.join(__dirname, '..', '__fixtures__/response_thing_no_versions.xml'), 'utf-8')
}

export const WriteXmlParseByEndpoint = (outputName: string, contentData: string, overwrite: boolean = false) => {

    const filePath: string = path.join(__dirname, '..', `__fixtures__/${outputName}.json`)

    if (fs.existsSync(filePath) && !overwrite) {
        return;
    }

    fs.writeFileSync(filePath, contentData, { encoding: 'utf-8' })
}