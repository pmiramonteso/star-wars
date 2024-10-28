import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl = 'http://localhost:3000';

constructor(private http: HttpClient) {}

register(formValue: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, formValue)
  }

login(formValue: any): Observable<any>{
  return this.http.post<any>(`${this.baseUrl}/login`, formValue)
  }

getProtectedData(): Observable<any> {
  const token = localStorage.getItem('accessToken');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(`${this.baseUrl}/protected`, { headers });
  }
  
}
