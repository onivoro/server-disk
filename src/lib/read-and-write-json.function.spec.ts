import { writeFileAsJson } from './write-file-as-json.function';
import { readFileAsJson } from './read-file-as-json.function';
import { rmSync } from 'fs';

describe('writeFileAsJson', () => {
  it('worx', async () => {
    const path = 'path.json';
    const obj = { some: 'value', other: 337 };
    await writeFileAsJson(path, obj)
    expect((await readFileAsJson(path)).other).toBe(obj.other);

    try {
      rmSync(path);
    } catch (e: any) { }
  });
});