import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/curewell-interfaces/appointment';
import { CurewellService } from 'src/app/services/curewell.service';

@Component({
  selector: 'app-see-appointment',
  templateUrl: './see-appointment.component.html',
  styleUrls: ['./see-appointment.component.scss']
})
export class SeeAppointmentComponent implements OnInit {
  showComponent = true;

  appointment: Appointment[] = [];
  constructor(private _curewellService: CurewellService, private router: Router) { }
  ngOnInit(): void {
    try {
      setTimeout(() => {
        this.showComponent = false;
      }, 3000);
      this.getAppointmentDetails(); // Calling the getAppointmentDetails method in the beginning
    } catch (error) {
      console.error('An error occurred during component initialization:', error);
      // You can handle the error here, such as displaying an error message.
    }
  }
  getAppointmentDetails() {
    try {
      this._curewellService.getAppointment().subscribe(
        value => {
          this.appointment = value; // putting the value in the appointment list array
          console.log(this.appointment);
        },
        error => {
          this.appointment = [];
          console.error('An error occurred while fetching Appointment data:', error);
          // You can handle the error here, such as displaying an error message.
        },
        () => console.log("Success")
      );
    } catch (error) {
      console.error('An error occurred while fetching Appointment data:', error);
      // You can handle the error here, such as displaying an error message.
    }
  }


}
