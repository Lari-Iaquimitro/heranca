import { Empregado } from "./Empregado";

export class Comissionado extends Empregado{

    private totalVendas: string;
    private taxaComissao: number;

    public constructor(_nome: string, _cpf: string, _totalVendas: string, _taxaComissao: number){
        super(_nome, _cpf);
        this.totalVendas = _totalVendas;
        this.taxaComissao = _taxaComissao;
    }

    public setTotalVendas(_totalVendas: string): void{
        this.totalVendas = _totalVendas;
    }
    public getTotalVendas(): string{
       return this.totalVendas;
    }
    public setTaxaComissao(_taxaComissao: number): void{
        this.taxaComissao = _taxaComissao;
    }
    public getTaxaComissao(){
        return this.taxaComissao;
    }
    
    public vencimento(): number {
        return this.;
    }
}