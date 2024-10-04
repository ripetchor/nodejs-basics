import { createReadStream } from 'node:fs';
import { EOL } from 'node:os';
import { resolve } from 'node:path';
import { stdout } from 'node:process';
import { throwError } from '../helpers.js';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
  try {
    const filePath = resolve(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');

    const readStream = createReadStream(filePath);

    const hash = createHash('sha256');

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      stdout.write(hash.digest('hex') + EOL);
    });
  } catch (error) {
    throwError(error.message);
  }
};

await calculateHash();
