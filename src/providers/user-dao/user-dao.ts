import { User } from './../../Model/user';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the UserDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDaoProvider {

  constructor(public dbProvider : DatabaseProvider) {}

  public insert(user : User) : void{
    this.dbProvider.getBD()
    .then((db : SQLiteObject) =>{
      let sql = 'insert into user (id, nome, email, password) values(?,?,?,?)';
      let data = [user.getID(), user.getName(), user.getEmail(), 
        user.getPassword()];

      db.executeSql(sql, data).then(() =>{
        console.log("Usuario cadastrado com sucesso!");
      }).catch(e => console.error(e));
    })
    .catch(e => console.error(e));
  }

  public update(user : User){
    this.dbProvider.getBD()
    .then((db : SQLiteObject) =>{
      let sql = 'update user set id = ?, nome = ?, email = ?, password = ?';
      let data = [user.getID(), user.getName(), user.getEmail(), 
        user.getPassword()];

      db.executeSql(sql, data).then(() =>{
        console.log("Dado foi alterado!");
      }).catch(e => console.error(e));
    })
    .catch(e => console.error(e));

  }
}
