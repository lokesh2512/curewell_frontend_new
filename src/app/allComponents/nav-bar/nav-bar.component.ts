import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchValidation } from './match-validation';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  LoginForm !: FormGroup;
 // SignUpform !: FormGroup;
  submitted: boolean = false;
  //submittedSign: boolean = false;
  passwordRegex: string = "^[(a-zA-Z_)+(0-9){2,2}]$";

  constructor(private fb: FormBuilder) { };
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      userName: [null, [Validators.required]],
      passWord: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10),Validators.pattern(this.passwordRegex)]]

    });
    // this.SignUpform = this.fb.group({
    //   UserName: [null, [Validators.required]],
    //   emailId: [null, [Validators.required, Validators.email]],
    //   passWord: [null, [Validators.required, Validators.minLength(8)]],
    //   confirmPass: [null, [Validators.required, Validators.minLength(8)]]

    // }, { validators: MatchValidation("passWord", "confirmPass") }
   // )
  }
  OnSubmit() {
    this.submitted = true;
    console.log(this.LoginForm);

  }
  // OnSubmitSignUp() {
  //   this.submittedSign = true;
  //   console.log(this.SignUpform);

  // }
  getControl(controlName: string): AbstractControl {
    return this.LoginForm.controls[controlName];

  }
  // getControlSign(controlName: string): AbstractControl {
  //   return this.SignUpform.controls[controlName];

 // }
  get f(): { [controlname: string]: AbstractControl } {
    return this.LoginForm.controls;
  }

  // get g(): { [controlname: string]: AbstractControl } {
  //   return this.SignUpform.controls;
  // }




}
