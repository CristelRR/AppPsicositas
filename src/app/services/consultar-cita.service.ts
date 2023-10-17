import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultarCita } from '../models/consultarCita';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCitaService {

  constructor(private http : HttpClient) { }

  URL_API = 'http://localhost:3000/cita/';

  public consultarCita:ConsultarCita={
    idCita: '',
    idAlumno:'',
    status: '',
    nombreAlu: '',
    apPaternoAlu:'',
    apMaternoAlu:'',
    nombrePsi: '',
    apPaternoPsi: '',
    apMaternnoPsi: '',
    nomConsultorio: '',
    ubicacion: '',
    nomModalidad: '',
    fecha: '',
    horario: ''
  };

  consultarCitas:ConsultarCita[]=[];

  getByInfoCita(idAlumno: string) {
    return this.http.get<ConsultarCita[]>(this.URL_API+idAlumno);
  }

}
