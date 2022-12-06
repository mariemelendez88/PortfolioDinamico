import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importar los servicios


//Importar los componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modales/login/login.component';
import { LogoutComponent } from './modales/logout/logout.component';
import { RedesComponent } from './menu/redes/redes.component';
import { AcercademiComponent } from './principal/acercademi/acercademi.component';
import { ExperienciaComponent } from './principal/experiencia/experiencia.component';
import { EstudiosComponent } from './principal/estudios/estudios.component';
import { SkillsComponent } from './principal/skills/skills.component';
import { ProyectosComponent } from './principal/proyectos/proyectos.component';
import { ReferenciasComponent } from './principal/referencias/referencias.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './principal/banner/banner.component';
import { DashAcercademiComponent } from './modales/dash-acercademi/dash-acercademi.component';
import { DashBannerComponent } from './modales/dash-banner/dash-banner.component';
import { DashEstudiosComponent } from './modales/dash-estudios/dash-estudios.component';
import { DashExperienciaComponent } from './modales/dash-experiencia/dash-experiencia.component';
import { DashPerfilComponent } from './modales/dash-perfil/dash-perfil.component';
import { DashProyectosComponent } from './modales/dash-proyectos/dash-proyectos.component';
import { DashSkillsComponent } from './modales/dash-skills/dash-skills.component';
import { DashRedesComponent } from './modales/dash-redes/dash-redes.component';
import { DashReferenciasComponent } from './modales/dash-referencias/dash-referencias.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { LogoApComponent } from './menu/logo-ap/logo-ap.component';
import { BotonLoginComponent } from './menu/boton-login/boton-login.component';
import { BotonLogoutComponent } from './menu/boton-logout/boton-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RedesComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    ReferenciasComponent,
    NavbarComponent,
    PiedepaginaComponent,
    DashboardComponent,
    BannerComponent,
    DashAcercademiComponent,
    DashBannerComponent,
    DashEstudiosComponent,
    DashExperienciaComponent,
    DashPerfilComponent,
    DashProyectosComponent,
    DashSkillsComponent,
    DashRedesComponent,
    DashReferenciasComponent,
    ErrorComponent,
    IndexComponent,
    NavbarDashboardComponent,
    LogoApComponent,
    BotonLoginComponent,
    BotonLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
