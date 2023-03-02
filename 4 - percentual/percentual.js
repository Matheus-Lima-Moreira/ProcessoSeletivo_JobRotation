const faturamentoDistribuidora = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'Outros', valor: 19849.53 },
]

const valorTotalMensal = faturamentoDistribuidora.reduce((prev, curr) => prev + curr.valor, 0);

console.log(`O valor total mensal foi de: ${valorTotalMensal}\n`);

faturamentoDistribuidora.forEach(faturamento => {
  console.log(`O percentual de faturamento de ${faturamento.estado} foi de: ${((faturamento.valor / valorTotalMensal) * 100).toFixed(2)}%`);
});