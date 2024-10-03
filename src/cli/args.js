const formatArgs = (argName, argValue) => {
  return argName.slice(2) + ' is ' + argValue;
};

const parseArgs = () => {
  const argsSlice = process.argv.slice(2);
  const argNames = argsSlice.filter((_, index) => index % 2 === 0);
  const argValues = argsSlice.filter((_, index) => index % 2 !== 0);

  for (let i = 0; i < argNames.length; i += 1) {
    console.log(formatArgs(argNames[i], argValues[i]));
  }
};

parseArgs();
