import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './allComponents/nav-bar/nav-bar.component';
import { NewHomeComponent } from './allComponents/new-home/new-home.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { CardsectionComponent } from './allComponents/cardsection/cardsection.component';
import { TileSectionComponent } from './allComponents/tile-section/tile-section.component';
import { HttpClientModule } from '@angular/common/http';
import { CurewellService } from './services/curewell.service';
import { ViewDoctorComponent } from './allComponents/view-doctor/view-doctor.component';
import { AddDoctorComponent } from './allComponents/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './allComponents/update-doctor/update-doctor.component';
import { ViewSpecializationComponent } from './allComponents/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './allComponents/view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './allComponents/update-surgery/update-surgery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsSectionComponent } from './allComponents/news-section/news-section.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewHomeComponent,
    FooterComponent,
    CardsectionComponent,
    TileSectionComponent,
    ViewDoctorComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    ViewSpecializationComponent,
    ViewTodaysSurgeryComponent,
    UpdateSurgeryComponent,
    FooterComponent,
    NewsSectionComponent,
    LandingPageComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule


  ],
  providers: [HttpClientModule, CurewellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
