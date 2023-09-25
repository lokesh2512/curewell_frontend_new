import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surgery } from 'src/app/curewell-interfaces/Surgery';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.scss']
})
export class UpdateSurgeryComponent implements OnInit{
  surgery: Surgery[] = [];
  doctorId: number =0;
  surgeryId: number=0;
  surgeryDate: Date = new Date();
  startTime: number=0;
  endTime: number =0;
  surgeryCategory: string="";
  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['DoctorId'];
    this.surgeryId = this.route.snapshot.params['SurgeryId'];
    this.surgeryDate = this.route.snapshot.params['SurgeryDate'];
    this.startTime = this.route.snapshot.params['StartTime'];
    this.endTime = this.route.snapshot.params['EndTime'];
    this.surgeryCategory = this.route.snapshot.params['SurgeryCategory'];
  }
    //To Update Surgery Time In The DataBase
    updateSurgery(startTime: number, endTime: number){
      this._cureWellService.UpdateSurgery(this.doctorId, this.endTime, this.startTime, this.surgeryCategory, this.surgeryDate, this.surgeryId).subscribe(
        value => {
          if (value) {
            alert("Updated Successfully :)")
            this.router.navigate(['/TodaySurgery'])
          }
          else {
            alert("Sorry, Could Not Update :(")
          this.router.navigate(['/TodaySurgery'])
          }
        }
      )
    }
  

}
