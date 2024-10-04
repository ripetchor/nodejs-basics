import { access } from 'node:fs/promises';

export const throwError = (message = 'FS operation failed') => {
  throw new Error(message);
};

export const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};
