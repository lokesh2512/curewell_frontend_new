import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/curewell-interfaces/doctor';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {
  doctorList: Doctor[] = [];

  constructor(private _curewellService: CurewellService, private router: Router) { }

  // First thing to be called during initialization
  ngOnInit(): void {
    try {
      this.getDoctor(); // Calling the getDoctor method in the beginning
    } catch (error) {
      console.error('An error occurred during component initialization:', error);
      // You can handle the error here, such as displaying an error message.
    }
  }

  // Getting the data from the services
  getDoctor() {
    try {
      this._curewellService.getDoctor().subscribe(
        value => {
          this.doctorList = value; // putting the value in the doctor list array
          // console.log(this.doctorList);
        },
        error => {
          this.doctorList = [];
          console.error('An error occurred while fetching doctor data:', error);
          // You can handle the error here, such as displaying an error message.
        },
        () => console.log("Success")
      );
    } catch (error) {
      console.error('An error occurred while fetching doctor data:', error);
      // You can handle the error here, such as displaying an error message.
    }
  };

  // To Move from this component to Edit Doctor component with data
  EditDoctor(doctor: Doctor) {
    try {
      this.router.navigate(['/edit', doctor.DoctorId, doctor.DoctorName]);
    } catch (error) {
      console.error('An error occurred while navigating to Edit Doctor component:', error);
      // You can handle the error here, such as displaying an error message.
    }
  }
}
