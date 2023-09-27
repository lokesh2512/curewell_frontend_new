import { Injectable } from '@angular/core';
import { Doctor } from '../curewell-interfaces/doctor';
import { HttpClient, HttpHeaders, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Specialization } from '../curewell-interfaces/specialization';
import { Surgery } from '../curewell-interfaces/Surgery';
import { DoctorSpecialization } from '../curewell-interfaces/doctorSpecialization';

@Injectable({
  providedIn: 'root'
})
export class CurewellService {
  doctorList: Doctor[] | undefined;
  private header!: HttpHeaders;
  private authorizeData: string | null;
  private baseUrl = "http://localhost:61538";

  constructor(private http: HttpClient) {
    this.authorizeData = 'Bearer ' + sessionStorage.getItem('token');

    this.authHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorizeData || '', // Use an empty string if authorizeData is null
    });
  }
  private authHeader!: HttpHeaders;
  login(emailId: string, password: string): Observable<any> {
    console.log("login calling")
    console.log(emailId, password)
    const body = new HttpParams()
      .set('username', emailId)
      .set('password', password)
      .set('grant_type', 'password');
    return this.http.post(`${this.baseUrl}/token`, body);
  }

  // getRole(): Observable<any> {
  //   //let authorizeData = 'Bearer ' + sessionStorage.getItem("token");

  //   this.header = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + sessionStorage.getItem("token")
  //   })

  //   return this.http.get(`${this.baseUrl}/api/accounts/getrole`, { headers: this.header });
  // }




  //get Doctor
  getDoctor(): Observable<Doctor[]> {
    console.log(this.authorizeData)
    return this.http.get<Doctor[]>('http://localhost:61538/api/home/getalldoctors', { headers: this.authHeader });
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

  //get Specialization by code
  getDoctorBySpecialization(code: string): Observable<DoctorSpecialization[]> {
    //const params = new HttpParams().set('code', code);
    return this.http.get<DoctorSpecialization[]>('http://localhost:61538/api/home/specializationcode' + code);
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
