import { fork } from 'node:child_process';
import { EOL } from 'node:os';
import { resolve } from 'node:path';
import { stdout } from 'node:process';
import { throwError } from '../helpers.js';

const spawnChildProcess = async (args) => {
  const modulePath = resolve(import.meta.dirname, 'files', 'script.js');

  const childProcess = fork(modulePath, args);

  childProcess.on('error', (error) => {
    throwError(error.message);
  });

  childProcess.on('exit', (code) => {
    stdout.write('Child process exit with code: ' + code + EOL);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([
  'someArgument1',
  'someArgument2',
  'someArgument3',
  'someArgument4',
  'someArgument5',
]);
