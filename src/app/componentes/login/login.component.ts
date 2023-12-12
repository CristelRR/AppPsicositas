import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  constructor(public loginService:LoginService, private router: Router) {}

  ngOnInit(): void{}

  valLog(form:NgForm){
    console.log('Validando...')
    this.loginService.valLog(form.value).subscribe(
      res => {
        if(res.length == 0){
          console.log('Usuario o contraseña incorrecto');
          form.reset();
        }else{
          console.log('Sesión Iniciada')
          if(res[0].rol == 'alumno'){
            console.log('Inicio alumno');
            this.router.navigate(['agendar-cita']);
          }else{
            console.log('psicologo');
            this.router.navigate(['agendar-consultorio'])
          }
        }
      },
      err => {
        console.log('Error al iniciar' + err)
      }
    )
    console.log('No valido')
  }

  formReset(form:NgForm){
    this.loginService.login = form.value;
    form.reset();
  }
}
