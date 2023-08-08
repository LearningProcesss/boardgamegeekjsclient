const { BggClient } = require("boardgamegeekclient")
const { ValidatorTraverse } = require("./dist-utils/validator");
const { ReflectionType, ReflectionTypeExcludable } = require('./dist-utils/reflection')

let client
let reflectionProperties
let reflectionPropertiesExcludable

beforeAll(() => {
    client = BggClient.Create()
    reflectionProperties = ReflectionType('');
    reflectionPropertiesExcludable = ReflectionTypeExcludable();
})

describe('BggClient', () => {
    describe('BggThingClient', () => {
        it('should fetch and deserialize all data when request has all params', async () => {
            const dtoList = await client.thing.query({ id: 174430, videos: 1, comments: 1, marketplace: 1, stats: 1, versions: 1, type: "boardgame" })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
        it('should fetch with paginated progress with method function', async () => {
            let count = 0;
            await client.thing.queryWithProgress({
                id: [250621, 257668, 226255, 340790, 279307, 279306, 345121, 271447, 187104, 253618, 271512, 432, 68448, 173346, 346703, 302260, 239472, 172818, 231398, 202408, 267814, 267813, 191189, 267127, 281946, 264647, 2272, 230085, 31260, 247367, 256442, 161970, 6249, 181293],
                videos: 1,
                comments: 1,
                marketplace: 1,
                stats: 1,
                type: "boardgame"
            }, {limit: 10}, _data => {
                count++;
            });

            expect(count).toBeGreaterThanOrEqual(1);
        }, 70000);
        it('should fetch with paginated progress with main callback', async () => {
            let count = 0;

            client.thing.progressHandler = (_data) => {
                count++;
            };

            await client.thing.queryWithProgress({
                id: [250621, 257668, 226255, 340790, 279307, 279306, 345121, 271447, 187104, 253618, 271512, 432, 68448, 173346, 346703, 302260, 239472, 172818, 231398, 202408, 267814, 267813, 191189, 267127, 281946, 264647, 2272, 230085, 31260, 247367, 256442, 161970, 6249, 181293],
                videos: 1,
                comments: 1,
                marketplace: 1,
                stats: 1,
                type: "boardgame"
            });

            expect(count).toBeGreaterThanOrEqual(1);
        }, 70000);
    });
    describe('BggFamilyDtoParser', () => {
        it('should parse Family dto when xml response is valid', async () => {
            const dtoList = await client.family.query({ id: 8374 })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggForumListDtoParser', () => {
        it('should parse Forumlist dto when xml response is valid', async () => {
            const dtoList = await client.forumlist.query({ id: 227002, type: "thing" })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    })
    describe('BggForumDtoParser', () => {
        it('should parse Forum dto when xml response is valid', async () => {

            const dtoList = await client.forum.query({ id: 19 })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggThreadDtoParser', () => {
        it('should parse Thread dto when xml response is valid', async () => {

            const dtoList = await client.thread.query({ id: 1082079, count: 10, minarticledate: '2021-12-15' })

            // console.log("thread dtolist", dtoList);

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggUserDtoParser', () => {
        it('should parse User dto when xml response is valid', async () => {

            const dtoList = await client.user.query({ name: 'mattiabanned' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggGuildDtoParser', () => {
        it('should parse Guild dto when xml response is valid', async () => {

            const dtoList = await client.guild.query({ id: 1303, members: 1 })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggPlayDtoParser', () => {
        it('should parse Play dto when xml response is valid', async () => {

            const dtoList = await client.play.query({ username: 'mattiabanned' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
        it('should parse Play dto when xml response is valid with comments', async () => {

            const dtoList = await client.play.query({ username: 'Vitho' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggCollectionDtoParser', () => {
        it('should parse Collection dto when xml response is valid', async () => {

            const dtoList = await client.collection.query({ username: 'mattiabanned' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
        it('should parse Collection dto when xml response contains conditiontext property', async () => {

            const dtoList = await client.collection.query({ username: 'Vitho', stats: 1 })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
});