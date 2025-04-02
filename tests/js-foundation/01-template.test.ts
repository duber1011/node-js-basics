import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/template.ts', () => {
  test('emailTemplate should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi, ');
  });

  test('emailTemplate should contain a name', () => {
    expect(emailTemplate).toContain('{{name}}');
  });

  test('emailTemplate should contain a orderId', () => {
    expect(emailTemplate).toContain('{{orderId}}');
  });
});
