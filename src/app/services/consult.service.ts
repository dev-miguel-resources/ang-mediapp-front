import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ConsultListExamDTOI } from '../models/consultListExamDTO';
import { FilterConsultDTO } from '../models/FilterConsultDTO';
import { Consult } from '../models/consult';

@Injectable({
  providedIn: 'root',
})
export class ConsultService {
  private url: string = `${environment.HOST}/consults`;

  constructor(private http: HttpClient) {}

  saveTransactional(dto: ConsultListExamDTOI) {
    return this.http.post(this.url, dto);
  }

  searchByOthers(dto: FilterConsultDTO) {
    return this.http.post<Consult[]>(`${this.url}/search/others`, dto);
  }

  searchByDates(date1: string, date2: string) {
    /*const params: HttpParams = new HttpParams();
    params.set('date1', date1);
    params.set('date2', date2);

    return this.http.get<Consult[]>(`${this.url}/search/dates`, {
      params: params,
    });*/

    return this.http.get<Consult[]>(
      `${this.url}/search/dates?date1=${date1}&date2=${date2}`
    );
  }
}
