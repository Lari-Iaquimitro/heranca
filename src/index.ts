import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado(`Tracy Sherman`, `279.792.388-00`, 1500)

a1.setNome(`Maria Ribeiro`);
a1.setCpf(`629.967.977-87`);
a1.setSalario(3000);

console.log(`Nome:${a1.getNome()}, CPF:${a1.getCpf()}`);
console.log(`Salário:${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado(`Norberto, `, `987.098.567-09`, 4000, 0.1);

c1.setNome(`Claudia`);
c1.setCpf(`139.892.732-07`);
c1.setTotalVendas(9000);
c1.setTaxaComissao(0.2);

console.log(`Nome:${c1.getNome()}, CPF:${c1.getCpf()}`);
console.log(`Comissão:${c1.getTaxaComissao()}, Total de Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista(`Jubisleu`, `676.876.678-87`, 300, 20);

h1.setNome(`Krobisvaldo`);
h1.setCpf(`666.666.666-66`);
h1.setValorHora(1.29);
h1.setHorasTrabalhadas(23.5);

console.log(`Nome:${h1.getNome()}, CPF:${h1.getCpf()}`);
console.log(`Valor Hora:${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);
