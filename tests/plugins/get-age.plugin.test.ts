import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {
  test('getAge() should to return a number', () => {
    const birthdate = '1990-01-01';
    const age = getAge(birthdate);
    expect(typeof age).toBe('number');
  });

  test('getAge() should return the correct age of a person', () => {
    const birthdate = '1990-01-01';
    const expectedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(getAge(birthdate)).toBe(expectedAge);
  });

  test('getAge() should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2023); // I could put this spy globally
    const birthdate = '2023-01-01';
    const expectedAge = 0;
    expect(getAge(birthdate)).toBe(expectedAge);
    // expect(spy).toHaveBeenCalled(); // Check if getFullYear was called
  });
});
