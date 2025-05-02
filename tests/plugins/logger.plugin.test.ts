import { buildLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.ts', () => {
  test('buildLogger() should to return a logger object', () => {
    const logger = buildLogger('test');
    expect(typeof logger).toBe('object');
  });

  test('buildLogger() should to return a logger object with log method', () => {
    const logger = buildLogger('test');
    expect(typeof logger.log).toBe('function');
  });

  test('buildLogger() should to return a logger object with error method', () => {
    const logger = buildLogger('test');
    expect(typeof logger.error).toBe('function');
  });
});
