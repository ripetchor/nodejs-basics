import { createReadStream } from 'node:fs';
import { EOL } from 'node:os';
import { resolve } from 'node:path';
import { stdout } from 'node:process';
import { throwError } from '../helpers.js';

const read = async () => {
  try {
    const filePath = resolve(import.meta.dirname, 'files', 'fileToRead.txt');

    const readStream = createReadStream(filePath, { encoding: 'utf-8' });

    readStream.on('data', (data) => {
      stdout.write(data + EOL);
    });
  } catch (error) {
    throwError(error.message);
  }
};

await read();
