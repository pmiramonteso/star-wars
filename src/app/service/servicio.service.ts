import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private urlAPI = 'https://swapi.dev/api/starships/';
  private urlPilotos = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  obtenerStarship(page: number = 1): Observable<any> {
    return this.http.get(`${this.urlAPI}?page=${page}`);
  }

  obtenerPilotos(): Observable<any> {
  return this.http.get(`${this.urlPilotos}`)
  }

  obtenerDetalle(id: number): Observable<any> {
    return this.http.get(`${this.urlAPI}${id}/`);
  }
}

