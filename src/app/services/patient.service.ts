import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url: string = `${environment.HOST}/patients`;

  constructor(private http: HttpClient) {}

    findAll() {
      return this.http.get<Patient[]>(this.url);
    }

    findById(id: number){
      return this.http.get<Patient>(`${this.url}/${id}`);
    }

}
