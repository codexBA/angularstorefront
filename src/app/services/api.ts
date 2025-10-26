import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

// Injectable means this service can be injected into constructors of other components or services.
@Injectable({
  providedIn: 'root',
})


export class ApiService {
  // Inject HttpClient to perform HTTP requests.
  constructor(private httpClient: HttpClient) {}
  
  // Perform a GET request to the specified URL with given options.
  get<T, options>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
