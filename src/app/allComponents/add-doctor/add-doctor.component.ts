import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {
  name: string = "";
  submitted: boolean = false;
  add!: FormGroup;
  regex:string = "^[a-zA-Z ]*$";

  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }
  
  ngOnInit(): void {
    try {
      this.name = this.route.snapshot.params['DoctorName'];
      this.add = new FormGroup({
        name: new FormControl(this.name, [Validators.required,Validators.pattern(this.regex), Validators.minLength(3)])
      });
    } catch (error) {
      console.error('An error occurred while initializing the form:', error);
    }
  }

  // To Add Doctor Details
  addDoctor(doctorName: string) {
    this.submitted = true;
    try {
      if (this.add.get('name')?.valid) {
        this._cureWellService.AddDoctor(this.name).subscribe(
          value => {
            if (value) {
              // alert("Doctor Added Successfully :)")
              this.router.navigate(['/ViewDoctor']);
            } else { 
              alert('Doctor Added Successfully :)');
              this.router.navigate(['/ViewDoctor']);
            }
          },
          error => {
            console.error('An error occurred while adding the doctor:', error);
          }
        );
      }
    } catch (error) {
      console.error('An error occurred while adding the doctor:', error);
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.add?.controls;
  }
}
