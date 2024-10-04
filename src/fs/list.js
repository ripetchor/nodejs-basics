import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { exists, throwError } from '../helpers.js';

const list = async () => {
  try {
    const folderPath = resolve(import.meta.dirname, 'files');

    const folderExists = await exists(folderPath);

    if (!folderExists) {
      throwError();
    }

    const files = await readdir(folderPath, { recursive: true });

    console.log(files);
  } catch {
    throwError();
  }
};

await list();
