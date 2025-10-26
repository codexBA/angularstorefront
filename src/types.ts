import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?: HttpHeaders | Record<string, string | string[]>;
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | Record<
        string,
        string | number | boolean | ReadonlyArray<string | number | boolean>
      >;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  credentials?: RequestCredentials;
  keepalive?: boolean;
  priority?: RequestPriority;
  cache?: RequestCache;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrer?: string;
  integrity?: string;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
  timeout?: number;
}


export interface Products {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface Product {  
  name: string; 
  price: string;
  image: string;
  rating: number;
}

export interface PaginationParams {
  [key: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  page: number;
  perPage: number;
}
