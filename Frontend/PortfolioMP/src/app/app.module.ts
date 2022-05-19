import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { ExperiencialaboralComponent } from './Componentes/experiencialaboral/experiencialaboral.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';
import { GraficosComponent } from './Componentes/graficos/graficos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    EncabezadoComponent,
    EstudiosComponent,
    ExperiencialaboralComponent,
    InformacionComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
