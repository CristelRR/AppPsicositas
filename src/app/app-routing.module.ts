import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCitaComponent } from './componentes/consultar-cita/consultar-cita.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { ValidarCitaComponent } from './componentes/validar-cita/validar-cita.component';
import { AgendarConsultorioComponent } from './componentes/agendar-consultorio/agendar-consultorio.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { HomeComponent } from './componentes/home/home.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { BarraCitaComponent } from './componentes/barra-cita/barra-cita.component';

const routes: Routes = [
  { path:'consultar-cita', component:ConsultarCitaComponent },
  { path:'agendar-cita', component:AgendarCitaComponent },
  { path:'validar-cita', component:ValidarCitaComponent},
  { path:'agendar-consultorio', component:AgendarConsultorioComponent},
  { path: 'barra-cita', component:BarraCitaComponent},
  { path:'pago', component:PagoComponent},
  { path:'', component:HomeComponent },
  { path: 'mapa', component: MapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
