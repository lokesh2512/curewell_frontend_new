import { Injectable } from '@angular/core';
import { Doctor } from '../curewell-interfaces/doctor';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Specialization } from '../curewell-interfaces/specialization';
import { Surgery } from '../curewell-interfaces/Surgery';

@Injectable({
  providedIn: 'root'
})
export class CurewellService {
  doctorList: Doctor[] | undefined;

  constructor(private http: HttpClient) { }

  //get Doctor
  getDoctor(): Observable<Doctor[]> {
    console.log(this.http.get<Doctor[]>('http://localhost:61538/api/home/getalldoctors'));
    return this.http.get<Doctor[]>('http://localhost:61538/api/home/getalldoctors');

  }


  //Update Doctor
  updateDoctor(doctorid: number, doctorName: string): Observable<boolean> {
    var doctor: Doctor;
    doctor = { DoctorId: doctorid, DoctorName: doctorName };
    return this.http.put<boolean>('http://localhost:61538/api/home/updatedoctor', doctor);
  }



  //get Specialization
  getSpecialization(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>('http://localhost:61538/api/home/getspecializations');
  }

  //GET All Surgery For Today
  getSurgery(): Observable<Surgery[]> {
    return this.http.get<Surgery[]>('http://localhost:61538/api/home/surgerytypefortoday');
  }

  //Update Todays Surgery
  UpdateSurgery(doctorId: number, endTime: number, startTime: number, surgeryCategory: string, surgeryDate: Date, surgeryId: number): Observable<boolean> {
    var surgery: Surgery;
    surgery = { DoctorId: doctorId, EndTime: endTime, StartTime: startTime, SurgeryCategory: surgeryCategory, SurgeryDate: surgeryDate, SurgeryId: surgeryId };
    return this.http.put<boolean>('http://localhost:61538/api/home/updatesurgery', surgery);
  }

  //Add Doctor
  AddDoctor(doctorName: string): Observable<boolean> {
    var doctor: Doctor;
    doctor = { DoctorId: 0, DoctorName: doctorName };
    return this.http.post<boolean>('http://localhost:61538/api/home/adddoctor', doctor);
  }
}
