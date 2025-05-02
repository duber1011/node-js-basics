import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory.ts', () => {
  test('buildMakePerson should return a function', () => {
    const getUUID = jest.fn(() => '12345');
    const getAge = jest.fn(() => 30);
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe('function');
  });

  test('makePerson should return a person object', () => {
    const getUUID = jest.fn(() => '12345');
    const getAge = jest.fn(() => 36);
    const makePerson = buildMakePerson({ getUUID, getAge });
    const person = makePerson({ name: 'John Doe', birthdate: '1988-10-15' });
    expect(person).toEqual({
      id: '12345',
      name: 'John Doe',
      birthdate: '1988-10-15',
      age: 36,
    });
  });
});
