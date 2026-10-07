import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../public/theme-init.js', import.meta.url), 'utf8');
function boot({saved = null, systemDark = false, storageBlocked = false, metaPresent = true} = {}) {
  const root = {dataset: {}, style: {}};
  const meta = {setAttribute(name, value) { this[name] = value; }};
  vm.runInNewContext(source, {
    localStorage: {getItem(key) {
      assert.equal(key, 'theme');
      if (storageBlocked) throw new Error('Storage disabled');
      return saved;
    }},
    window: {matchMedia(query) {
      assert.equal(query, '(prefers-color-scheme: dark)');
      return {matches: systemDark};
    }},
    document: {documentElement: root, querySelector() {return metaPresent ? meta : null;}},
  });
  return {root, meta};
}

for (const systemDark of [false, true]) {
  test(`first paint follows ${systemDark ? 'dark' : 'light'} system preference`, () => {
    const {root, meta} = boot({systemDark});
    assert.equal(root.dataset.theme, systemDark ? 'dark' : 'light');
    assert.equal(root.style.colorScheme, root.dataset.theme);
    assert.equal(meta.content, systemDark ? '#050B10' : '#f2efe8');
  });
}
for (const saved of ['light', 'dark']) {
  test(`saved ${saved} overrides the opposite system preference`, () => {
    assert.equal(boot({saved, systemDark: saved === 'light'}).root.dataset.theme, saved);
  });
}
test('invalid persisted preferences fall back to the system', () => {
  for (const saved of ['', 'auto', 'undefined']) {
    assert.equal(boot({saved, systemDark: true}).root.dataset.theme, 'dark');
  }
});
test('blocked storage still renders with the system theme', () => {
  assert.equal(boot({storageBlocked: true, systemDark: true}).root.dataset.theme, 'dark');
});
test('missing optional theme-color metadata does not block startup', () => {
  assert.equal(boot({metaPresent: false, saved: 'dark'}).root.dataset.theme, 'dark');
});
test('theme initialization is blocking and precedes the application', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const init = '<script src="/theme-init.js"></script>';
  assert.ok(html.includes(init));
  assert.ok(html.indexOf(init) < html.indexOf('</head>'));
  assert.ok(html.indexOf(init) < html.indexOf('src="/src/main.tsx"'));
});
