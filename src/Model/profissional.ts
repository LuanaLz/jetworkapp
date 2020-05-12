import { Publicacao } from './publicacao';

export class Profissional{
    private id: number;
    private name: string;
    private data_nasc: Date;
    private estado_civil: string;
    private endereco: string;
    private telefone: number;
    private celular: number;
    private escolaridade: string;
    private resumo_prof: string;
    private objetivo: string;
    private publicacao: Array<Publicacao>;

    constructor(id? : number, name? : string, data_nasc? : Date, estado_civil? : string, endereco? : string, telefone? : number, celular? : number, escolaridade? : string, resumo_prof? : string, objetivo? : string){
        this.setID(id);
        this.setName(name);
        this.setDataNascimento(data_nasc);
        this.setEstadoCivil(estado_civil);
        this.setEndereco(endereco);
        this.setTelefone(telefone);
        this.setCelular(celular);
        this.setEscolaridade(escolaridade);
        this.setResumoProf(resumo_prof);
        this.setObjetivo(objetivo);        
    }

    
    public setID(id: number) : void{
        this.id = id;
    }

    public getID() : number {
        return this.id;
    }

    public setName(name : string): void{
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setDataNascimento(data_nasc : Date): void{
        this.data_nasc = data_nasc;
    }

    public getDataNascimento() : Date {
        return this.data_nasc;
    }

    public setEstadoCivil(estado_civil : string): void{
        this.estado_civil = estado_civil;
    }

    public getEstadoCivil() : string {
        return this.estado_civil;
    }

    public setEndereco(endereco : string): void{
        this.endereco = endereco;
    }

    public getEndereco() : string {
        return this.endereco;
    }

    public setTelefone(telefone : number): void{
        this.telefone = telefone;
    }

    public getTelefone() : number {
        return this.telefone;
    }

    public setCelular(celular : number): void{
        this.celular = celular;
    }

    public getCelular() : number {
        return this.celular;
    }

    public setEscolaridade(escolaridade : string): void{
        this.escolaridade = escolaridade;
    }

    public getEscolaridade() : string {
        return this.escolaridade;
    }

    public setResumoProf(resumo_prof : string): void{
        this.resumo_prof = resumo_prof;
    }

    public getResumoProf() : string {
        return this.resumo_prof;
    }

    public setObjetivo(objetivo : string): void{
        this.objetivo = objetivo;
    }

    public getObjetivo() : string {
        return this.objetivo;
    }

    public setPublicacao(publicacao : Array<Publicacao>): void{
        this.publicacao = publicacao;
    }

    public addPublicacao(publicacoes: Publicacao): void{
        if(this.publicacao == null){
            this.publicacao = new Array<Publicacao>();
        }
        this.publicacao.push(publicacoes);
    }

    public getPublicacao(): Array<Publicacao> {
       return this.publicacao;
    }
}