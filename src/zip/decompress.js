import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';
import { throwError } from '../helpers.js';

const decompress = async () => {
  try {
    const sourcePath = resolve(import.meta.dirname, 'files', 'archive.gz');
    const destinationPath = resolve(import.meta.dirname, 'files', 'fileToCompress.txt');

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);

    await pipeline(readStream, createGunzip(), writeStream);
  } catch (error) {
    throwError(error.message);
  }
};

await decompress();
