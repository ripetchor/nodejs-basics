import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { throwError } from '../helpers.js';

const write = async () => {
  try {
    const destinationFilePath = resolve(import.meta.dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(destinationFilePath, { flags: 'a+' });

    await pipeline(stdin, writeStream);
  } catch (error) {
    throwError(error.message);
  }
};

await write();
