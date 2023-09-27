import { Injectable } from '@angular/core';
import { Doctor } from '../curewell-interfaces/doctor';
import { HttpClient, HttpHeaders, HttpParams, HttpStatusCode } from '@angular/common/http';
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
    try {
      console.log("login calling");
      console.log(emailId, password);
      const body = new HttpParams()
        .set('username', emailId)
        .set('password', password)
        .set('grant_type', 'password');
      return this.http.post(`${this.baseUrl}/token`, body);
    } catch (error) {
      console.error('Error in login:', error);
      throw error; // Rethrow the error for the caller to handle
    }
  }

  //get Doctor
  getDoctor(): Observable<Doctor[]> {
    try {
      console.log(this.authorizeData);
      return this.http.get<Doctor[]>('https://localhost:44322/api/CureWell/GetDoctor');
    } catch (error) {
      console.error('Error in getDoctor:', error);
      throw error;
    }
  }


  //Update Doctor
  updateDoctor(doctorid: number, doctorName: string): Observable<boolean> {
    try {
      var doctor: Doctor;
      doctor = { DoctorId: doctorid, DoctorName: doctorName };
      return this.http.put<boolean>('https://localhost:44322/api/CureWell/UpdateDoctorDetails', doctor);
    }
    catch (error) {
      console.error('Error in updateDoctor:', error);
      throw error;
    }
  }



  //get Specialization
  getSpecialization(): Observable<Specialization[]> {
    try {
      return this.http.get<Specialization[]>('https://localhost:44322/api/CureWell/GetSpecialization');
    }
    catch (error) {
      console.error('Error in getSpecialization:', error);
      throw error;
    }
  }

  //Get All Appointments
  getAppointment(): Observable<Appointment[]>{
    try {
      return this.http.get<Appointment[]>('https://localhost:44322/api/CureWell/getappointment');
    }
    catch (error) {
      console.error('Error in getAppointment:', error);
      throw error;
    }
  }

  //get Specialization by code
  getDoctorBySpecialization(code: string): Observable<DoctorSpecialization[]> {
    //const params = new HttpParams().set('code', code);
    try {
      return this.http.get<DoctorSpecialization[]>('https://localhost:44322/api/CureWell/GetDoctorBySpecialization/' + code);
    }
    catch (error) {
      console.error('Error in getDoctorBySpecialization:', error);
      throw error;
    }
  }

  //GET All Surgery For Today
  getSurgery(): Observable<Surgery[]> {
    try {
      return this.http.get<Surgery[]>('https://localhost:44322/api/CureWell/GetSurgeryType');
    }
    catch (error) {
      console.error('Error in getSurgery:', error);
      throw error;
    }
  }

  //Update Todays Surgery
  UpdateSurgery(doctorId: number, endTime: number, startTime: number, surgeryCategory: string, surgeryDate: Date, surgeryId: number): Observable<boolean> {
    try {
      var surgery: Surgery;
      surgery = { DoctorId: doctorId, EndTime: endTime, StartTime: startTime, SurgeryCategory: surgeryCategory, SurgeryDate: surgeryDate, SurgeryId: surgeryId };
      return this.http.put<boolean>('https://localhost:44322/api/CureWell/UpdateSurgery', surgery);
    }
    catch (error) {
      console.error('Error in UpdateSurgery:', error);
      throw error;
    }
  }

  //Add Doctor
  AddDoctor(doctorName: string): Observable<boolean> {
    try {
      var doctor: Doctor;
      doctor = { DoctorId: 0, DoctorName: doctorName };
      return this.http.post<boolean>('https://localhost:44322/api/CureWell/AddDoctor', doctor);
    }
    catch (error) {
      console.error('Error in AddDoctor:', error);
      throw error;
    }
  }

  //Add Appointment
  AddAppointment(department: string, username: string, phone: string) {
    try {
      var appointment: Appointment;
      appointment = { AppointmentId: 0, Department: department, UserName: username, PhoneNumber: phone };
      return this.http.post<boolean>('https://localhost:44322/api/CureWell/addappointment', appointment);
    }
    catch (error) {
      console.error('Error in AddAppointment:', error);
      throw error;
    }
  }
}
