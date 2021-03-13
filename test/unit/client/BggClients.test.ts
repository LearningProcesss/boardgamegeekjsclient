import { BggClient } from '../../../src/master'

describe('Bgg clients', () => {
    const client: BggClient = BggClient.Create();

    describe('Thing client', () => {
        test('should query Thing endpoint - single id', async () => {
            const data = await client.thing.query({ id: [174430] });

            const { id, type } = data[0];

            expect(data.length).toBe(1);
            expect(id).toBe(174430);
            expect(type).toBe('boardgame');
        });
        test('should query Thing endpoint - multiple id', async () => {
            const data = await client.thing.query({ id: [174430, 35421, 310873] });

            expect(data.length).toBe(3);
        });
        test('should query Thing endpoint - multiple id and boardgmae as filters', async () => {
            const data = await client.thing.query({ id: [174430, 35421, 310873, 250337], type: ['boardgame'] });

            expect(data.length).toBe(3);
        });
        test('should query Thing endpoint - multiple id and boardgameexpansion as filters', async () => {
            const data = await client.thing.query({ id: [174430, 35421, 310873, 250337], type: ['boardgameexpansion'] });

            expect(data.length).toBe(1);
        });
        test('should query Thing endpoint - subtypes', async () => {
            const data = await client.thing.query({ id: [174430], stats: 1, videos: 1, ratingcomments: 1, marketplace: 1 });

            const { links, statistics, videos, comments, marketplacelistings } = data[0];

            expect(links).toBeDefined();
            expect(links.filter(item => item.id === 1022)[0].value).toBe('Adventure');
            expect(statistics.page).toBe(1);
            expect(statistics.ratings.ranks.length).toBe(3);
            expect(videos.total).toBeGreaterThanOrEqual(1);
            expect(videos.items.length).toBeGreaterThan(1);
            expect(comments.items.length).toBeGreaterThan(1);
            expect(marketplacelistings.length).toBeGreaterThan(1);
        });
    });
    // describe('Family client', () => {
    //     test('should query Family endpoint - single id', async () => {
    //         const data = await client.family.query({ id: 8374 });

    //         const { id, type, things } = data[0];

    //         expect(data.length).toBe(1);
    //         expect(id).toBe(8374);
    //         expect(things.length).toBeGreaterThan(50);
    //     });
    //     test('should query Family endpoint - multiple id - no filters', async () => {
    //         const data = await client.family.query({ id: [8374, 22184, 59218, 1029, 2076] });

    //         expect(data.length).toBe(5);
    //     });
    //     test('should query Family endpoint - multiple id and multiple filters', async () => {
    //         const data = await client.family.query({ id: [8374, 22184, 59218, 1029, 2076], type: ["rpgfamily", "rpgperiodical"] });

    //         expect(data.length).toBe(2);
    //     });
    // });
    describe('Forum lists client', () => {
        test('should query Forum lists endpoint - thing filter', async () => {
            const data = await client.forumlist.query({ id: 245934, type: ["thing"] });
            const { forums } = data[0];
            expect(data.length).toBe(1);
            expect(forums.length).toBeGreaterThan(5);
        });
        test('should query Forum lists endpoint - family filter', async () => {
            const data = await client.forumlist.query({ id: 245934, type: ["family"] });

            expect(data.length).toBe(1);
        });
    });
    describe('Forum client', () => {
        test('should query Forum endpoint - thing filter', async () => {
            const data = await client.forum.query({ id: 19, page: 2 });
            const { threads } = data[0];
            expect(data.length).toBe(1);
            expect(threads.length).toBeGreaterThan(1);
        });
    });
    describe('Thread client', () => {
        test('should query Thread endpoint', async () => {
            const data = await client.thread.query({ id: 2571698, count: 5, minarticledate: '2021-01-03' });
            const { articles } = data[0];
            expect(data.length).toBe(1);
            expect(articles.length).toBe(5);
            expect(articles.every(item => item.postdate.startsWith('2021-01-03'))).toBe(true);
        });
    });
    describe('User client', () => {
        test('should query User endpoint', async () => {
            const data = await client.user.query({ name: "mattiabanned" });
            const { id } = data[0];
            expect(data.length).toBe(1);
            expect(id).toBe(1236367);
        });
    });
    describe('Guild client', () => {
        test('should query Guild endpoint', async () => {
            const data = await client.guild.query({ id: 1733 });
            const { members } = data[0];
            expect(data.length).toBe(1);
        });
    });
    describe('Play client', () => {
        test('should query Play endpoint', async () => {
            const data = await client.play.query({ username: 'HappyHexagon' });
            const { plays } = data[0];
            expect(data.length).toBe(1);
            expect(plays.length).toBeGreaterThan(10);
        });
    });
    describe('Collection client', () => {
        test('should query Collection endpoint', async () => {
            const data = await client.collection.query({ username: 'MattiaBanned' });
            const { items } = data[0];
            expect(data.length).toBe(1);
            expect(items.length).toBeGreaterThan(10);
        });
    });
});
