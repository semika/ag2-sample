import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent} from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService} from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [ // component goes here...
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [ //Angular inbuild modules goes here.. 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
                             {path : 'heroes', component : HeroesComponent }, 
                             {path : 'dashboard', component : DashboardComponent},
                             {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
                             {path : 'detail/:id', component : HeroDetailComponent } 
                          ]) 
  ],
  providers: [HeroService], ///services goes here.
  bootstrap: [AppComponent]
})
export class AppModule { }
