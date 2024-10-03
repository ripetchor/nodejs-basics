import { cpus } from 'node:os';
import { resolve } from 'node:path';
import { isMainThread, Worker } from 'node:worker_threads';
import { throwError } from '../helpers.js';

const performCalculations = async () => {
  try {
    if (isMainThread) {
      const workerPath = resolve(import.meta.dirname, 'worker.js');

      let n = 10;

      const results = [];

      for (let i = 0; i < cpus().length; i += 1) {
        const worker = new Worker(workerPath, { workerData: n });

        n += 1;

        const promise = new Promise((resolve) => {
          worker.on('message', (message) => {
            resolve({ status: 'resolved', data: message });
          });

          worker.on('error', () => {
            resolve({ status: 'error', data: null });
          });
        });

        results.push(promise);
      }

      console.log(await Promise.all(results));
    }
  } catch (error) {
    throwError(error.message);
  }
};

await performCalculations();
