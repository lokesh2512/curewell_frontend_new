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
  showComponent = true;
  code: string = "";
  doctorList: DoctorSpecialization[] = [];

  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }
  
  ngOnInit(): void {
    try {
      setTimeout(() => {
        this.showComponent = false;
      }, 3000);
      this.code = this.route.snapshot.params['code'];
      this.getDoctorBySpecialization();
    } catch (error) {
      console.error('An error occurred while initializing the component:', error);
    }
  }

  getDoctorBySpecialization() {
    try {
      this._cureWellService.getDoctorBySpecialization(this.code).subscribe(
        value => {
          this.doctorList = value; // putting the value in the doctor list array
          console.log(this.doctorList);
        },
        error => {
          this.doctorList = [];
          console.error('An error occurred while fetching doctor by specialization:', error);
        },
        () => console.log("Success")
      );
    } catch (error) {
      console.error('An error occurred while fetching doctor by specialization:', error);
    }
  }
}
