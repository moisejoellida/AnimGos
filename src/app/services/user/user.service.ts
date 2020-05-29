import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { appSettings } from 'src/app/settings/app.setting';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }

  findAllUsers(){
    return this.Http.get(appSettings.APP_URL + "/users/");
  }
  
  findById(idUser: number){
    return this.Http.get(appSettings.APP_URL + "/users/" + idUser);
  }

  saveUser(user: User){
    return this.Http.post(appSettings.APP_URL + "/users/", user);
  }

  login(mail: string, password: string){
    let param = new HttpParams();
    param.append("mail", mail);
    param.append("password", password);
    return this.Http.post(appSettings.APP_URL + "/users/login", param);
  }
}
