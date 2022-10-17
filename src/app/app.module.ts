import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HySComponent } from './components/hy-s/hy-s.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { PiedepgComponent } from './components/piedepg/piedepg.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercadeComponent,
    EducacionComponent,
    TrabajoComponent,
    HySComponent,
    ProyectoComponent,
    PiedepgComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
