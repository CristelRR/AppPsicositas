import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_API = 'http://localhost:3000/login/';

  public login: Login = {
    id_usuario:'',
    password:'',
    rol:''
  };

  loginn:Login[]=[];

  constructor(private http: HttpClient) { }

  getUsr(){
    return this.http.get<Login[]>(this.URL_API)
  }

  valLog(loginn: Login) {
    return this.http.post<Login[]>(`${this.URL_API}/${loginn.id_usuario}/${loginn.password}`, {});
  }  
  
}
