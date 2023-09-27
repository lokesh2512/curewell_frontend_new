import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurewellService } from 'src/app/services/curewell.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cardsection',
  templateUrl: './cardsection.component.html',
  styleUrls: ['./cardsection.component.scss']
})
export class CardsectionComponent implements OnInit {
  appointmentForm !: FormGroup;
  submitted: boolean = false;
  showAlert = false;
  mobileNoRegex: string = "^[0-9]*$";


  constructor(private fb: FormBuilder, private _cureWellService: CurewellService, private router: Router) { }


  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      departMent: [null, [Validators.required]],
      //doctor: [null, [Validators.required]],
      Patientname: [null, [Validators.required, Validators.minLength(4)]],
      ContactNumber: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobileNoRegex)]]

    })


    //Adding Appointment

  }
  OnSubmit(department: string, name: string, phone: string) {
    this.submitted = true;
    console.log(this.appointmentForm);
    if(this.appointmentForm.invalid){
      return;
    }
    this.showAlert = true;
    if(this.showAlert == true){
      Swal.fire("Thank You....", 'Appointment Confirmed Successfully', 'success')
    }

    //Adding Appointment

    this._cureWellService.AddAppointment(department, name, phone).subscribe(
      value => {
        if (value) {
          // alert("Doctor Added Successfully :)")
          console.log("Added Appointment");
        } else { 
        }
      },
      error => {
        console.error('An error occurred while adding the doctor:', error);
      }
    )
    

  }
  getControl(controlName: string): AbstractControl {
    return this.appointmentForm.controls[controlName];

  }
  get f(): { [controlname: string]: AbstractControl } {
    return this.appointmentForm.controls;
  }
  // simpleAlert(){
    
  //   Swal.fire("Thank You....", 'Appointment Confirmed', 'success')

  // }



}
