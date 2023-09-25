import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { FooterComponent } from './footer/footer.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsectionComponent } from './cardsection/cardsection.component';
import { TileSectionComponent } from './tile-section/tile-section.component';
import { NewsSectionComponent } from './news-section/news-section.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewHomeComponent,
    FooterComponent,
    CardsectionComponent,
    TileSectionComponent,
    NewsSectionComponent,
    

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
