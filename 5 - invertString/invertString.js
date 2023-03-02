const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Give me a string: `, string => {

  let newString = '';
  for(var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  console.log(newString);

  readline.close();
});