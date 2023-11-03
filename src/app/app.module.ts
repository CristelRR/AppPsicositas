import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraCitaComponent } from './componentes/barra-cita/barra-cita.component';
import { ConsultarCitaComponent } from './componentes/consultar-cita/consultar-cita.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { ValidarCitaComponent } from './componentes/validar-cita/validar-cita.component';
import { AgendarConsultorioComponent } from './componentes/agendar-consultorio/agendar-consultorio.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { HomeComponent } from './componentes/home/home.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraCitaComponent,
    ConsultarCitaComponent,
    AgendarCitaComponent,
    ValidarCitaComponent,
    AgendarConsultorioComponent,
    PagoComponent,
    HomeComponent,
    MapaComponent,
    LoginComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //PERMITE EL USO DE FORMULARIOS
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
