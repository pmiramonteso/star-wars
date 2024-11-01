import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../interficie/usuario';


@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl = 'http://localhost:3000';


constructor(private http: HttpClient) {
}

register(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, user)
}

login(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
}

getProtectedData(): Observable<any> {
  const token = localStorage.getItem('accessToken');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<any>(`${this.baseUrl}/protected`, { headers });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken'); 
  }
}
