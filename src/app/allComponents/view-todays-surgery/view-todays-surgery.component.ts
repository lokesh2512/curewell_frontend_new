import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  //For Property binding of each row
  getBackgroundColor(index: number): string {
    const colors = ['#FAD7A0', '#D6EAF8', '#A3E4D7', '#D5F5E3', '#A9CCE3', '#D4EFDF', '#F9E79F', '#D0ECE7', '#D1F2EB', '#D6EAF8']; 
    return colors[index % colors.length];
  }

}
