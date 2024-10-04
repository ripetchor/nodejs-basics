import { cp } from 'node:fs/promises';
import { resolve } from 'node:path';
import { exists, throwError } from '../helpers.js';

const copy = async () => {
  try {
    const sourceFolderPath = resolve(import.meta.dirname, 'files');
    const targetFolderPath = resolve(import.meta.dirname, 'files_copy');

    const sourceFolderExists = await exists(sourceFolderPath);
    const targetFolderExists = await exists(targetFolderPath);

    if (!sourceFolderExists || targetFolderExists) {
      throwError();
    }

    await cp(sourceFolderPath, targetFolderPath, { recursive: true });
  } catch {
    throwError();
  }
};

await copy();
