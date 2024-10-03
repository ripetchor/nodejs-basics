import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import { throwError } from '../helpers.js';

const compress = async () => {
  try {
    const sourcePath = resolve(import.meta.dirname, 'files', 'fileToCompress.txt');
    const destinationPath = resolve(import.meta.dirname, 'files', 'archive.gz');

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);

    await pipeline(readStream, createGzip(), writeStream);
  } catch (error) {
    throwError(error.message);
  }
};

await compress();
