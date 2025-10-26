import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private api: ApiService) {}

  getProducts(url: string, params: PaginationParams): Observable<Products> {
    return this.api.get(url, {
      params: {
        page: params.page,
        perPage: params.perPage,
      },
      responseType: 'json',
      observe: 'body',
    });
  }
}
