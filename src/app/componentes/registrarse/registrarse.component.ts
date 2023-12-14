import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { PsicologoService } from 'src/app/services/psicologo.service';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(public alumnoService:AlumnoService, public psicologoService:PsicologoService, public carreraService:CarreraService) { }

  ngOnInit(): void {
    this.getCarrera();
    this.getAlumno();
  }

  getAlumno(){
    this.alumnoService.getAlumno().subscribe(
      res => {
        this.alumnoService.alumnos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createAlumno(form:NgForm){  //Sirve para agregar e insertar
    alert('Insertando Registro');
     this.alumnoService.createAlumno(form.value).subscribe(
      res=> {
        this.getAlumno();
        form.reset();
      },
      err=> console.log(err)
    )
  }  
  
  getCarrera(){
    this.carreraService.getCarrera().subscribe(
      res => {
        this.carreraService.carreras= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  formReset(form:NgForm){
    this.alumnoService.alumno=form.value;
    form.reset();
  }

}
