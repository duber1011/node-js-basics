import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {
  test('characters should be an array', () => {
    expect(Array.isArray(characters)).toBe(true);
  });

  test('characters should contain Flash and Superman', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  test('Flash should be the first character', () => {
    expect(characters[0]).toBe('Flash');
  });

  test('Superman should be the second character', () => {
    expect(characters[1]).toBe('Superman');
  });
});
