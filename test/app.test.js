const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const app = require('../app');
const { version } = require('../package.json');

let server;
let baseUrl;

before(async () => {
  // An available port keeps tests independent of the local demo server.
  server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(() => new Promise((resolve, reject) => {
  server.close((error) => error ? reject(error) : resolve());
}));

test('GET /health returns HTTP 200 and JSON', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /application\/json/);
});

test('Health status is UP', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal((await response.json()).status, 'UP');
});

test('Health identifies DevLaunch', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal((await response.json()).application, 'DevLaunch');
});

test('Health reports the version from package.json', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal((await response.json()).version, version);
});

test('GET / serves the DevLaunch website', async () => {
  const response = await fetch(baseUrl);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const html = await response.text();
  assert.match(html, /DevLaunch/);
  assert.match(html, /id="version"/);
});

test('Styles and browser JavaScript are available', async () => {
  for (const asset of ['/styles.css', '/script.js']) {
    const response = await fetch(`${baseUrl}${asset}`);
    assert.equal(response.status, 200, asset);
    assert.ok((await response.text()).length > 0);
  }
});
