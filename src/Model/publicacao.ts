// 

export class Publicacao{
    private id: number;
    private titulo: Text;
    private categoria: Text;
    private descricao: Text;
    private nivel_experiencia: Text;
    private valor: number;    
    private cidade: Text;
    private estado: Text;
    private periodo: number;
    private telefone: number;

    constructor(id? : number, titulo? : Text, categoria? : Text, descricao? : Text, nivel_experiencia? : Text, valor? : number, cidade? : Text, estado? : Text, periodo? : number, telefone? : number){
        this.setID(id);
        this.setTitulo(titulo);
        this.setCategoria(categoria);
        this.setDescricao(descricao);
        this.setNivelExperiencia(nivel_experiencia);
        this.setValor(valor);
        this.setCidade(cidade);
        this.setEstado(estado);
        this.setPeriodo(periodo);
        this.setTelefone(telefone);          
    }
    
    public setID(id: number) : void{
        this.id = id;
    }

    public getID() : number {
        return this.id;
    }

    public setTitulo(titulo : Text): void{
        this.titulo = titulo;
    }

    public getTitulo() : Text {
        return this.titulo;
    }

    public setCategoria(categoria : Text): void{
        this.categoria = categoria;
    }

    public getCategoria() : Text {
        return this.categoria;
    }

    public setDescricao(descricao : Text): void{
        this.descricao = descricao;
    }

    public getDescricao() : Text {
        return this.descricao;
    }

    public setNivelExperiencia(nivel_experiencia : Text): void{
        this.nivel_experiencia = nivel_experiencia;
    }

    public getNivelExperiencia() : Text {
        return this.nivel_experiencia;
    }
    
    public setValor(valor : number): void{
        this.valor = valor;
    }

    public getValor() :number{
        return this.valor;
    }

    public setCidade(cidade : Text): void{
        this.cidade = cidade;
    }

    public getCidade() : Text {
        return this.cidade;
    }

    public setEstado(estado : Text): void{
        this.estado = estado;
    }

    public getEstado() : Text {
        return this.estado;
    }

    public setPeriodo(periodo : number): void{
        this.periodo = periodo;
    }

    public getPeriodo() : number{
        return this.periodo;
    }

    public setTelefone(telefone : number): void{
        this.telefone = telefone;
    }

    public getTelefone() : number{
        return this.telefone;
    }
}