import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/curewell-interfaces/doctor';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})
export class UpdateDoctorComponent implements OnInit {
  doctorList: Doctor[] = [];
  id: number = 0;
  name: string = "";
  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['DoctorId'];
    this.name = this.route.snapshot.params['DoctorName']
  }
  //To Update The New Updated Doctor's Name in Database
  updateDoctor(doctorname: string) {
    this._cureWellService.updateDoctor(this.id, this.name).subscribe(
      value => {
        if (value) {
          alert("Updated Successfully :)")
          this.router.navigate(['/ViewDoctor'])
        }
        else {
          alert("Sorry, Could Not Update :(")
          this.router.navigate(['/ViewDoctor'])
        }
      }
    )
  }
    }
