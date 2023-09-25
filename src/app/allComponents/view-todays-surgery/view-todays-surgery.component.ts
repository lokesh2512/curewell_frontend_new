import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Surgery } from 'src/app/curewell-interfaces/Surgery';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-view-todays-surgery',
  templateUrl: './view-todays-surgery.component.html',
  styleUrls: ['./view-todays-surgery.component.scss']
})
export class ViewTodaysSurgeryComponent implements OnInit {
  surgery: Surgery[]=[];
  constructor(private _cureWellService: CurewellService,private router: Router){}
  ngOnInit(): void {
    this.todaySurgery();
  }
  //To Get Todays Surgery Data
  todaySurgery() {
    this._cureWellService.getSurgery().subscribe(
      (value) => {
        this.surgery = value;
      },
      (error) => {
        console.log("Error");
      },
      () => {
        console.log('Success');
      }

    )
  }

  //To Edit The Particular Surgery Time
  editSurgeryTime(surgery: Surgery) {
    //Values Cannot be Passed As Object, Hence Passing it AS Values
    this.router.navigate(['/editsurgery',surgery.DoctorId,surgery.EndTime,surgery.StartTime,surgery.SurgeryCategory,surgery.SurgeryDate,surgery.SurgeryId])
  }

}
