import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Demanda} from './demandas/demandas.component';


@Injectable({
  providedIn: 'root'
})
export class DemandasService {

  constructor(private http: HttpClient) {}

  getDemandas():Observable<Demanda[]>{
    return this.http.get<Demanda[]>("http://localhost:3000/demanda");

  }
}
