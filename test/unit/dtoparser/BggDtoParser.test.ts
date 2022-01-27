import { BggCollectionDto, BggCollectionDtoParser, BggFamilyDto, BggFamilyDtoParser, BggForumDto, BggForumDtoParser, BggForumlistDto, BggForumlistDtoParser, BggGuildDto, BggGuildDtoParser, BggPlayDto, BggPlayDtoParser, BggThingDto, BggThingDtoParser, BggThreadDto, BggThreadDtoParser, BggUserDto, BggUserDtoParser, IBggDto } from "../../../src/dto";
import { XmlResponseParser } from "../../../src/responseparser";
import { TextResponseByEndpoint } from "../utils";
import { ReflectionType, ReflectionTypeExcludable } from '../utils/reflection'
import { ValidatorTraverse } from '../utils/validator'
import path from 'path'

export let reflectionProperties: Map<string, string[]>
export let reflectionPropertiesExcludable: Map<string, string[]>

beforeAll(() => {
    reflectionProperties = ReflectionType(path.join(__dirname, '../../..', 'src/dto/concrete'));
    reflectionPropertiesExcludable = ReflectionTypeExcludable();
})

describe('BggDtoParsers', () => {

    const xmlToJsonParser = new XmlResponseParser();

    describe('BggThingDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggThingDtoParser = new BggThingDtoParser();

            const dtoList: BggThingDto[] = await dtoParser.jsonToDto(jsonData);

            const dto: BggThingDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
        it('should parse Thing dto and intercept expected existing properties that are missing when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1&withmissings'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggThingDtoParser = new BggThingDtoParser();

            const dtoList: BggThingDto[] = await dtoParser.jsonToDto(jsonData);

            const dto: BggThingDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).not.toStrictEqual([])
        });
    });
    describe('BggFamilyDtoParser', () => {
        it('should parse Family dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/family?id=8374'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggFamilyDtoParser = new BggFamilyDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggFamilyDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    });
    describe('BggForumListDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/forumlist?id=227002&type=thing'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggForumlistDtoParser = new BggForumlistDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggForumlistDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    })
    describe('BggForumDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/forum?id=19'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggForumDtoParser = new BggForumDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggForumDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    });
    describe('BggThreadDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thread?id=1082079&count=10&minarticledate=2021-12-15'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggThreadDtoParser = new BggThreadDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggThreadDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    });
    describe('BggUserDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/user?name=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggUserDtoParser = new BggUserDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggUserDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    });
    describe('BggGuildDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/guild?id=1303&members=1'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggGuildDtoParser = new BggGuildDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggGuildDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    });
    describe('BggPlayDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/plays?username=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggPlayDtoParser = new BggPlayDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggPlayDto = dtoList[0]
            
            console.dir(dtoList[0])
            
            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    });
    describe('BggCollectionDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/collection?username=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggCollectionDtoParser = new BggCollectionDtoParser();

            const dtoList = await dtoParser.jsonToDto(jsonData);

            const dto: BggCollectionDto = dtoList[0]

            const validationResult = ValidatorTraverse(dto, reflectionProperties, reflectionPropertiesExcludable)

            expect(validationResult).toStrictEqual([])
        });
    });
});