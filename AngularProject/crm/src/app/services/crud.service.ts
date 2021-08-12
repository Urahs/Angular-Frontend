import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = environment.BaseURL;
  constructor(private http:HttpClient) { }

  getUserProfile() {
    return this.http.get(this.apiUrl + '/UserProfile');
  }
}
