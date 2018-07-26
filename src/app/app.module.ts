import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';


// componetes
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
