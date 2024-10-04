import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { exists, throwError } from '../helpers.js';

const create = async () => {
  try {
    const destinationPath = resolve(import.meta.dirname, 'files', 'fresh.txt');

    const fileExists = await exists(destinationPath);

    if (fileExists) {
      throwError();
    }

    const data = 'I am fresh and young';

    await writeFile(destinationPath, data);
  } catch {
    throwError();
  }
};

await create();
