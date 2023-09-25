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

  //first thing to be called during initialisation
  ngOnInit(): void {
    this.getDoctor();//Calling the getDoctor method in the beginning
  }


  //Geting the data from the services
  getDoctor() {
    this._curewellService.getDoctor().subscribe(
      value => {
        this.doctorList = value;//putting the value in the doctor list array
        console.log(this.doctorList);
      },
      error => {
        this.doctorList = [];
        console.log(error);
      },
      () => console.log("Success")
    )
  };


  //To Move from this component to Edit Doctor component with data
  EditDoctor(doctor: Doctor) {
    this.router.navigate(['/edit', doctor.DoctorId, doctor.DoctorName]);
  }

}
