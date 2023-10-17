import { Injectable } from '@angular/core';
import { Carrera } from '../models/carrera';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  URL_API = 'http://localhost:3000/carrera/'

  public carrera:Carrera={
    idCarrera: '',
    nomCarrera: '',
    area: ''
  };

  carreras:Carrera[]=[];

  constructor(private http: HttpClient) { }

  getCarrera(){
    return this.http.get<Carrera[]>(this.URL_API);
  }

  getByCarrera(idCarrera: String){
    return this.http.get<Carrera[]>(this.URL_API+idCarrera);
  }

  createCarrera(carrera:Carrera){
    return this.http.post(this.URL_API,carrera);
  }

  deleteCarrera(idCarrera:String){
    return this.http.delete(this.URL_API+idCarrera);
  }

  editCarrera(carrera:Carrera){
    return this.http.put(this.URL_API+carrera.idCarrera,carrera);
  }
}
