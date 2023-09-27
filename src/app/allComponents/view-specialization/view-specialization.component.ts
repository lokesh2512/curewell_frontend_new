import { CurewellService } from 'src/app/services/curewell.service';
import { Component, OnInit } from '@angular/core';
import { Specialization } from 'src/app/curewell-interfaces/specialization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrls: ['./view-specialization.component.scss']
})
export class ViewSpecializationComponent implements OnInit{
  specialization: Specialization[] = [];
  constructor(private _curewellService: CurewellService,private router: Router){}
  ngOnInit(): void {
    this.getSpecialization();
  }
  //
  getSpecialization() {
    this._curewellService.getSpecialization().subscribe(
      value => {
        this.specialization = value;
      },
      error => {
        console.log(error);
      },
      ()=> console.log("Success")
    )
  }
  todayDoctor(code:string) {
    this.router.navigate(['/bySpecialization', code]);
  }
}
