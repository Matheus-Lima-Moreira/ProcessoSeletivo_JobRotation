var data = require('./data.json');


const smallestValue = data.reduce((prev, curr) => Math.min(prev, curr.valor), 0);
const biggestValue = data.reduce((prev, curr) => Math.max(prev, curr.valor), 0);

const average = data.reduce((prev, curr) => prev + curr.valor, 0) / data.length;
const daysWithMoreThanAverage = data.filter((day) => day.valor > average).map((day) => day.dia);

console.log(`Menor valor de faturamento ocorrido em um dia do mês:`);
console.log(smallestValue);
console.log(`\nMaior valor de faturamento ocorrido em um dia do mês:`);
console.log(biggestValue);
console.log('\nNúmero de dias no mês em que o valor de faturamento diário foi superior à média mensal:');
console.log(daysWithMoreThanAverage.length);