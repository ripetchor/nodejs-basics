import { EOL } from 'os';
import { stdin, stdout } from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { throwError } from '../helpers.js';

const transform = async () => {
  try {
    const reverseTransformStream = new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk.reverse() + EOL);
        callback();
      },
    });

    await pipeline(stdin, reverseTransformStream, stdout);
  } catch (error) {
    throwError(error.message);
  }
};

await transform();
