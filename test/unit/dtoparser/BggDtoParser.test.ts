import { BggCollectionDtoParser, BggFamilyDtoParser, BggForumDtoParser, BggForumlistDtoParser, BggGuildDtoParser, BggPlayDtoParser, BggThingDto, BggThingDtoParser, BggThreadDtoParser, BggUserDtoParser, IBggDto } from "../../../src/dto";
import { XmlResponseParser } from "../../../src/responseparser";
import { ReflectionType, TextResponseByEndpoint, } from "../fixture_reader";

let reflectionProperties: Map<string, string[]>

beforeAll(() => {
    reflectionProperties = ReflectionType();

    // console.dir(reflectionProperties, { depth: null, colors: true })
})

interface IPropertyResult {
    property: string,
    message: string,
    valid: boolean,
    objectType: string
}

interface IValidation {
    results: IPropertyResult[]
}

// const validator = (dto: any, required: string[]): IPropertyResult[] => {

//     const result: IPropertyResult[] = []

//     for (const property of required) {
//         // console.log(dto[property]);

//         if (!dto.hasOwnProperty(property) || dto[property] === undefined) {
//             result.push({ valid: false, property, message: `required ${property} is missing or undefined.` })
//         }
//     }

//     return result
// }

const validatorTraverse = (object: any, result: IPropertyResult[] = []) => {

    result = result || []

    const currentType = object.constructor.name !== 'Array' ? object.constructor.name : object[0].constructor.name

    object = object.constructor.name !== 'Array' ? object : object[0]

    console.log(`currenttype: ${currentType}`);

    if (currentType !== 'Array' && !reflectionProperties.has(currentType)) {
        console.log(`${currentType} type not found in reflection.`);
        return
    } else if (currentType === 'Array' && !reflectionProperties.has(object[0].constructor.name)) {
        console.log(`${currentType} type not found in reflection.`);
        return
    }

    const properties: string[] = reflectionProperties.get(currentType)!

    for (const property of properties) {
        if ((typeof object[property] !== 'object') && (!object.hasOwnProperty(property) || object[property] === undefined)) {
            result.push({ valid: false, property, message: `required ${property} is missing or undefined.`, objectType: currentType })
        }
        else if ((typeof object[property] === 'object' && object[property] !== null)) {
            validatorTraverse(object[property], result)
        }
    }

    return result
}

// const thingValidator = (dto: BggThingDto) => {

//     validatorTraverse(dto)

//     const thingValidation: IValidation = {
//         results: validator(dto, reflectionProperties.get(dto.constructor.name)!)
//     }

//     const statisticsValidation: IValidation = {
//         results: validator(dto.statistics, ['page', 'ratings'])
//     }

//     const ratingsValidation: IValidation = {
//         results:
//             validator(dto.statistics.ratings, ['median'])
//     }

//     const pollsValidation: IValidation = {
//         results:
//             validator(dto.polls[1].results[0].resultItemList[2], ['numvotes'])
//     }

//     return [thingValidation, statisticsValidation, ratingsValidation, pollsValidation]
// }

describe('BggDtoParsers', () => {

    const xmlToJsonParser = new XmlResponseParser();

    describe('BggThingDtoParser', () => {
        // it('should parse Thing dto when xml response is valid', async () => {

        //     const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1'];

        //     const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

        //     const dtoParser: BggThingDtoParser = new BggThingDtoParser();

        //     const dtoList: BggThingDto[] = await dtoParser.jsonToDto(jsonData);

        //     const dto: BggThingDto = dtoList[0]

        //     const validationResult = thingValidator(dto)

        //     for (const validation of validationResult) {
        //         expect(validation.results).toStrictEqual([])
        //     }
        // });
        it('should parse Thing dto and intercept expected existing properties that are missing when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thing?id=174430&comments=1&marketplace=1&pagesize=10&ratingcomments=1&stats=1&videos=1&type=boardgame&versions=1&withmissings'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggThingDtoParser = new BggThingDtoParser();

            const dtoList: BggThingDto[] = await dtoParser.jsonToDto(jsonData);

            const dto: BggThingDto = dtoList[0]

            const validationResult = validatorTraverse(dto)

            // expect(validationResult.filter(validation => validation.results.length > 0).length).toBeGreaterThanOrEqual(1)
            expect(validationResult).toStrictEqual([])
        });
    });
    describe('BggFamilyDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/family?id=8374'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggFamilyDtoParser = new BggFamilyDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(8374)
            expect(dto[0].things.length).toBeGreaterThan(1)
        });
    });
    describe('BggForumListDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/forumlist?id=227002&type=thing'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggForumlistDtoParser = new BggForumlistDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(227002)
            expect(dto[0].type).toBe('thing')
            expect(dto[0].forums.length).toBeGreaterThan(1)
        });
    })
    describe('BggForumDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/forum?id=19'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggForumDtoParser = new BggForumDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(19)
            expect(dto[0].threads.length).toBeGreaterThan(1)
            expect(dto[0].noposting).not.toBeNaN()
            expect(dto[0].numthreads).toBeGreaterThan(1)
        });
    });
    describe('BggThreadDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/thread?id=1082079&count=10&minarticledate=2021-12-15'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggThreadDtoParser = new BggThreadDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(1082079)
            expect(dto[0].articles.length).toBe(10)
            expect(dto[0].numarticles).toBeGreaterThan(1)
            expect(dto[0].link).toBe('https://boardgamegeek.com/thread/1082079')
        });
    });
    describe('BggUserDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/user?name=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggUserDtoParser = new BggUserDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(1236367)
        });
    });
    describe('BggGuildDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/guild?id=1303&members=1'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggGuildDtoParser = new BggGuildDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].id).toBe(1303)
            expect(dto[0].members.length).toBeGreaterThan(1)
        });
    });
    describe('BggPlayDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/plays?username=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggPlayDtoParser = new BggPlayDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].username).toBe('mattiabanned')
            expect(dto[0].plays.length).toBeGreaterThanOrEqual(1)
        });
    });
    describe('BggCollectionDtoParser', () => {
        it('should parse Thing dto when xml response is valid', async () => {

            const xmlResponse: string = TextResponseByEndpoint['https://www.boardgamegeek.com/xmlapi2/collection?username=mattiabanned'];

            const jsonData = await xmlToJsonParser.parseResponse(xmlResponse);

            const dtoParser: BggCollectionDtoParser = new BggCollectionDtoParser();

            const dto = await dtoParser.jsonToDto(jsonData);

            expect(dto).not.toBeUndefined()
            expect(dto[0].totalitems).toBeGreaterThanOrEqual(1)
            expect(dto[0].items.length).toBeGreaterThanOrEqual(1)
        });
    });
});