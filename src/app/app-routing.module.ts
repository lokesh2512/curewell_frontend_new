import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './allComponents/add-doctor/add-doctor.component';
import { ViewSpecializationComponent } from './allComponents/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './allComponents/view-todays-surgery/view-todays-surgery.component';
import { ViewDoctorComponent } from './allComponents/view-doctor/view-doctor.component';
import { UpdateDoctorComponent } from './allComponents/update-doctor/update-doctor.component';
import { UpdateSurgeryComponent } from './allComponents/update-surgery/update-surgery.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "AddingDoctor", component: AddDoctorComponent },
  { path: "Specialization", component: ViewSpecializationComponent },
  { path: "TodaySurgery", component: ViewTodaysSurgeryComponent },
  { path: "ViewDoctor", component: ViewDoctorComponent },
  { path: "edit/:DoctorId/:DoctorName", component: UpdateDoctorComponent },
  { path:"editsurgery/:DoctorId/:EndTime/:StartTime/:SurgeryCategory/:SurgeryDate/:SurgeryId", component: UpdateSurgeryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
