import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/curewell-interfaces/doctor';
import { DoctorSpecialization } from 'src/app/curewell-interfaces/doctorSpecialization';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-doctor-by-specialization',
  templateUrl: './doctor-by-specialization.component.html',
  styleUrls: ['./doctor-by-specialization.component.scss']
})
export class DoctorBySpecializationComponent {

  code: string = "";
  doctorList: DoctorSpecialization[] = [];

  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }
  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.getDoctorBySpecialization();
  }
 getDoctorBySpecialization() {
   this._cureWellService.getDoctorBySpecialization(this.code).subscribe(
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
}
}

