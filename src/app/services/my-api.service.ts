import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  addDetails(details: any) {
    return this.http.post<any>(this.url, details);
  }
}
