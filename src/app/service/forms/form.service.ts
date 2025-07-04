import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../config/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = `${environment.apiUrl}/forms`;

  constructor(private http: HttpClient) {}

  getForm(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createForm(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  getFormById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: number, status: string): Observable<any> {
    // PATCH para atualizar parcialmente o recurso
    return this.http.patch(`${this.apiUrl}/${id}/status`, { status });
  }
}
