import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {
  test('httpClientPlugin.get() should to return a string', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const data = await httpClientPlugin.get(url);
    expect(typeof data).toBe('object');
  });

  test('httpClientPlugin.get() should to return a expected object', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const data = await httpClientPlugin.get(url);
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    });
  });

  test('httpClientPlugin.get() should to return a valid object', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const data = await httpClientPlugin.get(url);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('body');
  });

  // temporary test - will be implemented in the future, then remove this test
  test('httpClientPlugin.post() should to throw an error', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    await expect(httpClientPlugin.post(url, body)).rejects.toThrow(
      'Method not implemented.'
    );
  });

  // temporary test - will be implemented in the future, then remove this test
  test('httpClientPlugin.put() should to throw an error', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const body = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    await expect(httpClientPlugin.put(url, body)).rejects.toThrow(
      'Method not implemented.'
    );
  });

  // temporary tests - will be implemented in the future, then remove this test
  test('httpClientPlugin.delete() should to throw an error', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    await expect(httpClientPlugin.delete(url)).rejects.toThrow(
      'Method not implemented.'
    );
  });

  test('httpClientPlugin has all methods', () => {
    expect(httpClientPlugin).toHaveProperty('get');
    expect(httpClientPlugin).toHaveProperty('post');
    expect(httpClientPlugin).toHaveProperty('put');
    expect(httpClientPlugin).toHaveProperty('delete');
  });

  test('httpClientPlugin methods are functions', () => {
    expect(typeof httpClientPlugin.get).toBe('function');
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');
  });
});
