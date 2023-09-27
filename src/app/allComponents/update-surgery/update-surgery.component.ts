import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  surgeryCategory: string = "";
  form!: FormGroup;
  submitted: boolean = false;
  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router,private fb: FormBuilder) { }
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['DoctorId'];
    this.surgeryId = this.route.snapshot.params['SurgeryId'];
    this.surgeryDate = this.route.snapshot.params['SurgeryDate'];
    this.startTime = this.route.snapshot.params['StartTime'];
    this.endTime = this.route.snapshot.params['EndTime'];
    this.surgeryCategory = this.route.snapshot.params['SurgeryCategory'];
    this.form = this.fb.group({
      startTime: [this.startTime, [Validators.required,Validators.min(0),Validators.max(23.59)]],
      endTime: [this.endTime,[Validators.required,Validators.min(0),Validators.max(23.59)]],
    },{Validators:this.timeValidator(this.startTime,this.endTime)});
  }
  timeValidator(startTime: number, endTime: number): any {
    if (startTime && endTime && startTime >= endTime) {
      return { 'invalidTimeRange': true };
    }

    return null;
  }
    //To Update Surgery Time In The DataBase
  updateSurgery(startTime: number, endTime: number) {
    this.submitted = true;
    if (this.form.get('endTime')?.valid && this.form.get('startTime')?.valid) {
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
    getControl(controlName : string): AbstractControl{
      return  this.form.controls[controlName];
    }
    get f(): { [key: string]: AbstractControl }{
      return this.form?.controls;
    }
}
