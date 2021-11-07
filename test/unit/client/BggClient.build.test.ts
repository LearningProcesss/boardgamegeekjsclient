import { BggClient } from '../../../dist'


describe('Client from build dist', () => {
    describe('IBggThingClient', () => {
        const client = BggClient.Create();
        test('should work', async () => {
            const data = await client.thing.query({ id: 174430 });

            const { id } = data[0];

            expect(data.length).toBe(1);
            expect(id).toBe(174430);
        });
    });
});