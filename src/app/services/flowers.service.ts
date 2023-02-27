import { Flower } from '../interfaces/flower.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlowersService {
  private _url: string = 'https://dulces-petalos.herokuapp.com/api/product';

  constructor(private _http: HttpClient) {}

  getFlowerList(): Observable<Flower[]> {
    return this._http.get(`${this._url}`) as Observable<Flower[]>;
  }

  getFlowerItem(id: string): Observable<Flower> {
    return this._http.get(`${this._url}/${id}`) as Observable<Flower>;
  }
}
