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

@NgModule({
  declarations: [
    AppComponent,
    BarraCitaComponent,
    ConsultarCitaComponent,
    AgendarCitaComponent,
    ValidarCitaComponent,
    AgendarConsultorioComponent
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
