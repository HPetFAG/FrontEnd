import { Injectable } from '@angular/core';
import { environment } from '../../config/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../../models/animal.model';
import { PaginatedResponse } from '../../models/paginatedResponse.model';


@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private apiUrl = `${environment.apiUrl}/animal`;

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<PaginatedResponse<Animal>> {
    return this.http.get<PaginatedResponse<Animal>>(
      `${this.apiUrl}?page=${page}`
    );
  }

  getAnimalByID(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userData);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  searchByName(term: string, page: number = 1): Observable<PaginatedResponse<Animal>>  {
    return this.http.get<PaginatedResponse<Animal>>(`${this.apiUrl}/search?name=${term}&page=${page}`);
  }

  getTotalRegistered(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total-registered`);
  }

  getTotalAvailables(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total-available`);
  }

  getTotalAdopted(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total-adopted`);
  }
}
