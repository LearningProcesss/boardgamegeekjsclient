import { IRequestPaginator, RequestPaginator } from '../../../src/paginator';
import { IThingRequest } from '../../../src/request';

describe('IRequestPaginator', () => {
    test('should paginate request with one element by limit of 1', async () => {

        const sut: IRequestPaginator = new RequestPaginator();

        const paginations = sut.paginate<IThingRequest>({ id: 1 }, 1);

        expect(paginations.length).toStrictEqual(1);
    });
    test('should paginate request with more element by limit of 1', async () => {

        const sut: IRequestPaginator = new RequestPaginator();

        const paginations = sut.paginate<IThingRequest>({ id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, 1);

        expect(paginations.length).toStrictEqual(10);
    });
    test('should paginate complex request with more element by limit of 1', async () => {

        const sut: IRequestPaginator = new RequestPaginator(1);

        const paginations = sut.paginate<IThingRequest>({
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            comments: 1,
            videos: 1,
            marketplace: 1,
            versions: 1
        });

        paginations.forEach(page => expect(page).toMatchObject({
            current: expect.any(Number),
            total: expect.any(Number),
            request: expect.any(Object) //cant test properties
        }));
    });
});