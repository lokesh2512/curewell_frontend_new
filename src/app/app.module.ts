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
import { FormsModule } from '@angular/forms';
import { ViewDoctorComponent } from './allComponents/view-doctor/view-doctor.component';
import { AddDoctorComponent } from './allComponents/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './allComponents/update-doctor/update-doctor.component';
import { ViewSpecializationComponent } from './allComponents/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './allComponents/view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './allComponents/update-surgery/update-surgery.component';



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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [HttpClientModule,CurewellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
