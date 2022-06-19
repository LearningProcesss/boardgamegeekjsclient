import { BggClient } from '../../../src/master';

describe('BggClient', () => {
    it('should be composed by all clients', async () => {
      
        const instance = BggClient.Create();

        const clients = ['thing', 'family', 'forumlist', 'forum', 'thread', 'user', 'guild', 'play', 'collection', 'search', 'hot'];

        for (const [key, value] of Object.entries(instance)) {
            expect(clients.includes(key)).toBe(true);
          }
    });
});