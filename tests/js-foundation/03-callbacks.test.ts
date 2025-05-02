import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => {
  test('getUserById should return a user with id 1', (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
      });
      done();
    });
  });

  test('getUserById should return a user with id 2', (done) => {
    const id = 2;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 2,
        name: 'Jane Doe',
      });
      done();
    });
  });

  test('getUserById should return an error if user is not found', (done) => {
    const id = 3;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });
});
