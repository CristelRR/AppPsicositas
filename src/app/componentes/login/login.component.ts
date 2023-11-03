import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent {
  usuario: string='';
  password: string='';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onLoginSubmit() {
    // Llamamos al servicio de autenticación para realizar el inicio de sesión
    this.usuarioService.login(this.usuario, this.password)
      .subscribe(
        (response: any) => {
          if (response.message === "Inicio de sesión exitoso como alumno") {
            // Si el usuario es alumno, redirigir a la página de inicio de alumno
            this.router.navigate(['/agendar-cita']);
          } else if (response.message === "Inicio de sesión exitoso como psicólogo") {
            // Si el usuario es psicólogo, redirigir a la página de inicio de psicólogo
            this.router.navigate(['/validar-cita']);
          } else {
            // En caso de un mensaje desconocido, redirigir a una página de error o mostrar un mensaje
            console.error('Mensaje de inicio de sesión desconocido', response.message);
          }
        },
        (error: any) => {
          // Manejar errores de autenticación aquí (credenciales incorrectas, etc.).
          console.error('Error en el inicio de sesión', error);
          alert('Usuario o Contraseña Incorrectos')
        }
      );
  }
}
