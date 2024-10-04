import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { exists, throwError } from '../helpers.js';

const read = async () => {
  try {
    const filePath = resolve(import.meta.dirname, 'files', 'fileToRead.txt');

    const fileExists = await exists(filePath);

    if (!fileExists) {
      throwError();
    }

    const fileContent = await readFile(filePath, { encoding: 'utf8' });

    console.log(fileContent);
  } catch {
    throwError();
  }
};

await read();
