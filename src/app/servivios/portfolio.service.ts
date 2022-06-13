import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{
  return this.http.get('json');
      console.log("El servicio Porfolio esta corriendo");
  }
}

