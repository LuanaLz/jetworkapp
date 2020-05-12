import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite : SQLite) {
    // console.log('Hello DatabaseProvider Provider');
  }

  public getBD(){
    return this.sqlite.create({
      name: 'database',
      location: 'default'
    });
  }

  public createDatabase(){
    return this.getBD()
    .then((db : SQLiteObject) =>{
      this.createTables(db);
    })
    .catch(e => console.error(e));
  }

  private createTables(db : SQLiteObject){
    return db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS user(id integer primary key NOT NULL, nome string, email string NOT NULL, password string NOT NULL);'],
      ['CREATE TABLE IF NOT EXISTS publicacao(id integer primary key NOT NULL, titulo text, categoria text, descricao text, nivel_experiencia text, valor integer, cidade text, estado text, periodo integer, telefone integer );'],
      ['CREATE TABLE IF NOT EXISTS profissional(id integer primary key NOT NULL, nome string, data_nasc date, estado_civil text, endereco text, telefone integer, celular integer, escolaridade text, resumo_prof text, objetivo text);'],
      ['CREATE TABLE IF NOT EXISTS user_divulgador(id_user integer NOT NULL, id_publicacao integer, FOREIGN KEY(id_publicacao) REFERENCES publicacao(id), FOREIGN KEY(id_user) REFERENCES user(id), PRIMARY KEY(id_user, id_publicacao));'],
      ['CREATE TABLE IF NOT EXISTS prof_pub(id_profissional integer, id_publicacao integer, FOREIGN KEY(id_publicacao) REFERENCES publicacao(id), FOREIGN KEY(id_profissional) REFERENCES profissional(id), PRIMARY KEY(id_profissional, id_publicacao));'],
      ['CREATE TABLE IF NOT EXISTS user_profissional(id_user integer NOT NULL, id_profissional integer, FOREIGN KEY(id_profissional) REFERENCES profissional(id), FOREIGN KEY(id_user) REFERENCES user(id), PRIMARY KEY(id_user, id_profissional));']
    ]).then(() =>{
      console.log("deu certo")
    }).catch(e => console.error(e));
  }

}
