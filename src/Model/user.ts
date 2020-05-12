import { Publicacao } from './publicacao';

export class User{
    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private publicacao: Array<Publicacao>;

    constructor(id? : number, name? : string, email? : string, password? : string){
        this.setID(id);
        this.setName(name);
        this.setEmail(email);
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

    public setEmail(email : string): void{
        this.email = email;
    }

    public getEmail() : string {
        return this.email;
    }

    public setPassword(password : string): void{
        this.password = password;
    }

    public getPassword() : string {
        return this.password;
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