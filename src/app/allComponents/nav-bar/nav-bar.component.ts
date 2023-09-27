import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchValidation } from './match-validation';
import { CurewellService } from 'src/app/services/curewell.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  LoginForm !: FormGroup;
  // SignUpform !: FormGroup;
  submitted: boolean = false;
  showAlert: boolean = false;
  //submittedSign: boolean = false;
  passwordRegex: string = "^[(a-zA-Z_)+(0-9){2,2}]$";
  loginForm!: FormGroup;
  sub$?: Subscription;
  statusCode?: Number;

  constructor(private fb: FormBuilder, private service: CurewellService) {

  };
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      userName: [null, [Validators.required]],
      passWord: [null, [Validators.required]]

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
    this.service.login(this.f['emailId'].value, this.f['password'].value).subscribe({

      next: (data) => {

        console.log(data);

        sessionStorage.setItem("token", data.access_token);

      },

      error: (err) => console.error(err)

    })

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

  onSubmit() {
    console.log('on submit calling')
    console.log(this.LoginForm)
    this.sub$ = this.service.login(this.f['userName'].value, this.f['passWord'].value).subscribe({
      next: (data) => {
        console.log(data);
        sessionStorage.setItem("token", data.access_token);
      },
      error: (err) => {
        console.error(err.status);
        this.statusCode = err.status;
      }
    })
  }


}
