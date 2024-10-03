import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { exists, throwError } from '../helpers.js';

const remove = async () => {
  try {
    const targetPath = resolve(import.meta.dirname, 'files', 'fileToRemove.txt');

    const fileExists = await exists(targetPath);

    if (!fileExists) {
      throwError();
    }

    await rm(targetPath);
  } catch {
    throwError();
  }
};

await remove();
