import { BggClient } from "boardgamegeekclient"
import { ValidatorTraverse } from "./dist-utils/validator";
import { ReflectionType, ReflectionTypeExcludable } from './dist-utils/reflection'

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
            const dtoList = await client.thing.query({ id: 174430, videos: 1, comments: 1, marketplace: 1, stats: 1, type: "boardgame" })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
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
        it('should parse Thing dto when xml response is valid', async () => {
            const dtoList = await client.forumlist.query({ id: 227002, type: "thing" })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    })
    describe('BggForumDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const dtoList = await client.forum.query({ id: 19 })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggThreadDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const dtoList = await client.thread.query({ id: 1082079, count: 10, minarticledate: '2021-12-15' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggUserDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const dtoList = await client.user.query({ name: 'mattiabanned' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggGuildDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const dtoList = await client.guild.query({ id: 1303, members: 1 })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggPlayDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const dtoList = await client.play.query({ username: 'mattiabanned' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
    describe('BggCollectionDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const dtoList = await client.collection.query({ username: 'mattiabanned' })

            const validationResult = ValidatorTraverse(dtoList[0], reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        }, 70000);
    });
});