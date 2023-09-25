import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardsection',
  templateUrl: './cardsection.component.html',
  styleUrls: ['./cardsection.component.scss']
})
export class CardsectionComponent implements OnInit {
  appointmentForm !: FormGroup;
  submitted: boolean = false;
  mobileNoRegex: string = "^[0-9]*$";

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      departMent: [null, [Validators.required]],
      doctor: [null, [Validators.required]],
      Patientname: [null, [Validators.required, Validators.minLength(4)]],
      ContactNumber: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobileNoRegex)]]

    })


  }
  OnSubmit() {
    this.submitted = true;
    console.log(this.appointmentForm);

  }
  getControl(controlName: string): AbstractControl {
    return this.appointmentForm.controls[controlName];

  }
  get f(): { [controlname: string]: AbstractControl } {
    return this.appointmentForm.controls;
  }

}
