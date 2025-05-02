import { getUserById } from '../../src/js-foundation/04-arrow';

describe('js-foundation/04-arrow.ts', () => {
  test('getUserById should return a user', (done) => {
    const userId = 1;
    getUserById(userId, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: 'John Doe' });
      done();
    });
  });

  test('getUserById should return an error if user not found', (done) => {
    const userId = 99999;
    getUserById(userId, (err, user) => {
      expect(err).toBe(`User not found with id ${userId}`);
      expect(user).toBeUndefined();
      done();
    });
  });
});
