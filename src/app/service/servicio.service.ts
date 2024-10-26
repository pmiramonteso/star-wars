import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private urlAPI = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) { }

  obtenerStarship(page: number = 1): Observable<any> {
    return this.http.get(`${this.urlAPI}?page=${page}`);
  }

  obtenerDetalle(id: number): Observable<any> {
    return this.http.get(`${this.urlAPI}${id}/`);
  }
}

