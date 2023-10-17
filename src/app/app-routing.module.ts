import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCitaComponent } from './componentes/consultar-cita/consultar-cita.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { ValidarCitaComponent } from './componentes/validar-cita/validar-cita.component';
import { AgendarConsultorioComponent } from './componentes/agendar-consultorio/agendar-consultorio.component';

const routes: Routes = [
  { path:'consultar-cita', component:ConsultarCitaComponent },
  { path:'agendar-cita', component:AgendarCitaComponent },
  { path:'validar-cita', component:ValidarCitaComponent},
  { path:'agendar-consultorio', component:AgendarConsultorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
