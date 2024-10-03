import fsPromises from 'node:fs/promises';
import { resolve } from 'node:path';
import { exists, throwError } from '../helpers.js';

const rename = async () => {
  try {
    const oldFilePath = resolve(import.meta.dirname, 'files', 'wrongFilename.txt');
    const newFilePath = resolve(import.meta.dirname, 'files', 'properFilename.md');

    const oldFileExists = await exists(oldFilePath);
    const newFileExists = await exists(newFilePath);

    if (!oldFileExists || newFileExists) {
      throwError();
    }

    await fsPromises.rename(oldFilePath, newFilePath);
  } catch {
    throwError();
  }
};

await rename();
