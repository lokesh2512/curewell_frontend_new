import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {
  name: string = "";
  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }
  ngOnInit(): void {
    this.name = this.route.snapshot.params['DoctorName']
  }

  //To Add Doctor Details
  addDoctor(doctorName: string) {
    this._cureWellService.AddDoctor(this.name).subscribe(
      value => {
        if (value) {
          //alert("Doctor Added Successfully :)")
          this.router.navigate(['/ViewDoctor'])
        }
        else { alert('Doctor Added Successfully :)') }
        this.router.navigate(['/ViewDoctor'])
      }
    )
   }
}
