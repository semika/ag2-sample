import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Application components
import { AppComponent } from './app.component';
import { HeroDetailComponent} from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

//Application services
import { HeroService} from './hero.service';

//Application modules
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ // component goes here...
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [ //Angular modules goes here.. 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [HeroService], ///services goes here.
  bootstrap: [AppComponent]
})
export class AppModule { }
