import { DatabaseProvider } from './../database/database';
import { Injectable } from '@angular/core';
import { Publicacao } from './../../Model/publicacao';
import { SQLiteObject } from '@ionic-native/sqlite';



/*
  Generated class for the PublicaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublicaDaoProvider {

  constructor(public dbProvider : DatabaseProvider) {}

  public insert(publicacao : Publicacao) : void{
    this.dbProvider.getBD()
    .then((db : SQLiteObject) =>{
      let sql = 'insert into publicacao (id, titulo, categoria, descricao, nivel_experiencia, valor, cidade, estado, periodo, telefone) values(?,?,?,?,?,?,?,?,?,?)';
      let data = [publicacao.getID(), publicacao.getTitulo(), publicacao.getCategoria(), 
        publicacao.getDescricao(), publicacao.getNivelExperiencia(), publicacao.getValor(), 
        publicacao.getCidade(), publicacao.getEstado(), publicacao.getPeriodo(), publicacao.getTelefone()];

      db.executeSql(sql, data).then(() =>{
        console.log("Publicado com sucesso!");
      }).catch(e => console.error(e));
    })
    .catch(e => console.error(e));
  }

  public remove(id : number){
    this.dbProvider.getBD()
    .then((db : SQLiteObject) =>{
      let sql = 'delete from publicacao where id = ?';
      let data = [id];

      db.executeSql(sql, data).then(() =>{
        console.log("Esta publicação foi removida!");
      }).catch(e => console.error(e));
    })
    .catch(e => console.error(e));
    
  }

  public update(publicacao : Publicacao){
    this.dbProvider.getBD()
    .then((db : SQLiteObject) =>{
      let sql = 'update publicacao set id = ?, titulo = ?, categoria = ?, descricao = ?, nivel_experiencia = ?, valor = ?, cidade = ?, estado = ?, periodo = ?, telefone = ? where id = ?';
      let data = [publicacao.getID(), publicacao.getTitulo(), publicacao.getCategoria(), 
        publicacao.getDescricao(), publicacao.getNivelExperiencia(), publicacao.getValor(), 
        publicacao.getCidade(), publicacao.getEstado(), publicacao.getPeriodo(), publicacao.getTelefone(),publicacao.getID()];

      db.executeSql(sql, data).then(() =>{
        console.log("Publicação foi alterada!");
      }).catch(e => console.error(e));
    })
    .catch(e => console.error(e));

  }


  public getAll() : Array<Publicacao>{
    this.dbProvider.getBD()
    .then((db : SQLiteObject) =>{
      let sql = 'select * from publicacao';
      let data : any[];

      db.executeSql(sql, data)
        .then((data : any) =>{
          if (data.rows.length > 0) {
            let publicacaos = new Array<Publicacao>();
            for (var i = 0; i < data.rows.length; i++){
              let tmp = data.rows.item(i);
              var publicacao = new Publicacao(tmp.id, tmp.titulo, tmp.categoria, tmp.descricao, tmp.nivelExperiencia, tmp.valor, tmp.cidade, tmp.estado, tmp.periodo, tmp.telefone);
            
              publicacaos.push(publicacao);
            }
            return publicacaos;
          }else{
            return new Array<Publicacao>();
          }
        
      }).catch(e => {
        console.error(e);
        return null;
      });
    })
    .catch(e => {
      console.error(e);
      return null;
    });
    return null;
  }

}
