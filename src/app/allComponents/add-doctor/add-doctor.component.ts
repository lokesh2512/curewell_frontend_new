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
  name: string = ""; // Initialize the doctor's name
  submitted: boolean = false; // Flag to track whether the form has been submitted
  add!: FormGroup; // Initialize the form group
  regex:string = "^[a-zA-Z ]*$"; // Regular expression for validating the name

  constructor(
    private route: ActivatedRoute,
    private _cureWellService: CurewellService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    try {
      // Get the doctor's name from the route parameters
      this.name = this.route.snapshot.params['DoctorName'];
      
      // Initialize the form group with validators
      this.add = new FormGroup({
        name: new FormControl(this.name, [
          Validators.required, // Name is required
          Validators.pattern(this.regex), // Name should match the given regex
          Validators.minLength(3) // Name should be at least 3 characters long
        ])
      });
    } catch (error) {
      console.error('An error occurred while initializing the form:', error);
    }
  }

  // Function to add doctor details
  addDoctor(doctorName: string) {
    this.submitted = true; // Set the submitted flag to true
    try {
      if (this.add.get('name')?.valid) {
        // If the name input is valid, send a request to add the doctor
        this._cureWellService.AddDoctor(this.name).subscribe(
          value => {
            if (value) {
              // Success: Redirect to the ViewDoctor page
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

  // Helper function to access form controls
  get f(): { [key: string]: AbstractControl } {
    return this.add?.controls;
  }
}
