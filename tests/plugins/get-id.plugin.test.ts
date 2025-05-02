import { getUUID } from '../../src/plugins/get-id.plugin';

describe('plugins/get-id.plugin.ts', () => {
  test('getUUID() should to return a string', () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  });

  test('getUUID() should to return a valid UUID', () => {
    const uuid = getUUID();
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  });
});
