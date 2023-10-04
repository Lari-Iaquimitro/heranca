import { Assalariado } from "./model/Assalariado";

const a1 = new Assalariado(`Tracy Sherman`, `279.792.388-00`, 1500)

a1.setNome(`Maria Ribeiro`);
a1.setCpf(`629.967.977-87`);
a1.setSalario(3000);

console.log(`Nome:${a1.getNome()}, CPF:${a1.getCpf()}`);
console.log(`Salário:${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);