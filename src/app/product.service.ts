import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs'; 
import  'rxjs/add/operator/map';
import { Album } from "./album";
import { Product } from './product'

@Injectable()
export class ProductService {

    private _albumUrl: string = '../assets/album.json';
    private productUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => 
      <Album>response.json());
  }

  getProduct(): Observable<Product[]> {
    return this._http.get(this.productUrl).map(response => 
      <Product[]>response.json());
  }

}
