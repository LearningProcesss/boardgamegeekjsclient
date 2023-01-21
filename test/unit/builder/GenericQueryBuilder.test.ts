import { GenericQueryBuilder } from "../../../src/query";
import { IThingRequest, IFamilyRequest, IForumlistRequest, IForumRequest, IThreadRequest, IUserRequest, IGuildRequest, IPlaysRequest, ICollectionRequest, ISearchRequest } from "../../../src/request";

describe('GenericBuilder', () => {
    test('ignore undefined or null properties', () => {
        const builder = new GenericQueryBuilder<IThingRequest>()
        
        const request: ISearchRequest = {
            type: ["boardgame", "boardgameexpansion"],
            query: "Exit The Game",
            exact: undefined
        };

        const expected = "type=boardgame,boardgameexpansion&query=Exit The Game"

        const url = builder.build(request);

        expect(url).toEqual(expected);
    });
    describe('IThingRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IThingRequest>()

            const request: IThingRequest = {
                id: [174430, 176435],
                comments: 1,
                marketplace: 1,
                pagesize: 10,
                ratingcomments: 1,
                stats: 1,
                videos: 1,
                type: "boardgame",
                versions: 1,
                page: 2
            }

            const urlExpected = 'id=174430,176435&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1&page=2'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('IFamilyRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IFamilyRequest>()

            const request: IFamilyRequest = {
                id: [8374],
                type: ["boardgamefamily", "rpgfamily"]
            }

            const urlExpected = 'id=8374&type=boardgamefamily,rpgfamily'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('IForumlistRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IForumlistRequest>()

            const request: IForumlistRequest = {
                id: 227002,
                type: ["thing", "family"]
            }

            const urlExpected = 'id=227002&type=thing,family'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('IForumRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IForumRequest>()

            const request: IForumRequest = {
                id: 19,
                page: 2
            }

            const urlExpected = 'id=19&page=2'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('IThreadRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IThreadRequest>()

            const request: IThreadRequest = {
                id: 1082079,
                count: 10,
                minarticleid: 19837,
                minarticledate: '2021-12-01'
            }

            const urlExpected = 'id=1082079&count=10&minarticleid=19837&minarticledate=2021-12-01'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('IUserRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IUserRequest>()

            const request: IUserRequest = {
                name: 'mattiabanned',
                buddies: 1,
                guilds: 1,
                top: 1,
                hot: 1,
                page: 2,
                domain: "boardgame"
            }

            const urlExpected = 'name=mattiabanned&buddies=1&guilds=1&top=1&hot=1&page=2&domain=boardgame'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('IGuildRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IGuildRequest>()

            const request: IGuildRequest = {
                id: 1303,
                members: 1,
                page: 2,
                sort: "username"
            }

            const urlExpected = 'id=1303&members=1&page=2&sort=username'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('IPlaysRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<IPlaysRequest>()

            const request: IPlaysRequest = {
                id: 174430,
                username: 'mattiabanned',
                page: 2,
                type: "thing",
            }

            const urlExpected = 'id=174430&username=mattiabanned&page=2&type=thing'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
    describe('ICollectionRequest', () => {
        it('should build url by all interface prop', () => {
            const builder = new GenericQueryBuilder<ICollectionRequest>()

            const request: ICollectionRequest = {
                id: 174430,
                username: 'mattiabanned'
            }

            const urlExpected = 'id=174430&username=mattiabanned'

            const url = builder.build(request);

            expect(url).toEqual(urlExpected)
        });
    });
});