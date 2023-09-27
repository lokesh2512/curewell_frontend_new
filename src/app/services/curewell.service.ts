import { Injectable } from '@angular/core';
import { Doctor } from '../curewell-interfaces/doctor';
import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Specialization } from '../curewell-interfaces/specialization';
import { Surgery } from '../curewell-interfaces/Surgery';
import { DoctorSpecialization } from '../curewell-interfaces/doctorSpecialization';
import { Appointment } from '../curewell-interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class CurewellService {
  doctorList: Doctor[] | undefined;

  constructor(private http: HttpClient) { }

  //get Doctor
  getDoctor() : Observable<Doctor[]>{
    return this.http.get<Doctor[]>('https://localhost:44322/api/CureWell/GetDoctor');
  }


  //Update Doctor
  updateDoctor(doctorid: number, doctorName: string): Observable<boolean> {
    var doctor: Doctor;
    doctor = { DoctorId: doctorid, DoctorName: doctorName };
    return this.http.put<boolean>('https://localhost:44322/api/CureWell/UpdateDoctorDetails', doctor);
  }


    
  //get Specialization
  getSpecialization() : Observable < Specialization[] > {
    return this.http.get<Specialization[]>('https://localhost:44322/api/CureWell/GetSpecialization');
  }

  //Get All Appointments
  getAppointment(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>('https://localhost:44322/api/CureWell/getappointment');
  }

  //get Specialization by code
  getDoctorBySpecialization(code: string): Observable<DoctorSpecialization[]> {
    //const params = new HttpParams().set('code', code);
    return this.http.get<DoctorSpecialization[]>('https://localhost:44322/api/CureWell/GetDoctorBySpecialization/'+code);
  }

  //GET All Surgery For Today
  getSurgery(): Observable<Surgery[]>{
    return this.http.get<Surgery[]>('https://localhost:44322/api/CureWell/GetSurgeryType');
  }

  //Update Todays Surgery
  UpdateSurgery(doctorId: number, endTime: number, startTime: number, surgeryCategory: string, surgeryDate: Date, surgeryId: number):Observable<boolean> {
    var surgery: Surgery;
    surgery = { DoctorId: doctorId, EndTime: endTime, StartTime: startTime, SurgeryCategory: surgeryCategory, SurgeryDate: surgeryDate, SurgeryId: surgeryId };
    return this.http.put<boolean>('https://localhost:44322/api/CureWell/UpdateSurgery', surgery);
  }
  
  //Add Doctor
  AddDoctor(doctorName: string):Observable<boolean> {
    var doctor: Doctor;
    doctor = { DoctorId: 0, DoctorName: doctorName };
    return this.http.post<boolean>('https://localhost:44322/api/CureWell/AddDoctor', doctor);
  }
}
