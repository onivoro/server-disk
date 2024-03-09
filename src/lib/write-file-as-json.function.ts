import { writeFile } from 'fs/promises';

export async function writeFileAsJson(path: string, contents: any) {
  await writeFile(
    `${path}.json`.replace('.json.json', '.json'),
    JSON.stringify(contents, null, 2),
    { encoding: 'utf-8' }
  );
}
