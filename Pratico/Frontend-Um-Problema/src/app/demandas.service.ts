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
  getDemanda(demaId: number): Observable<Demanda>{
    console.log(demaId)
    return this.http.get<Demanda>("http://localhost:3000/demanda/" + demaId);
  }

  setDemanda(demanda: Demanda):Observable<any>{
    return this.http.post("http://localhost:3000/demanda",demanda);
  }

  updateDemanda(demanda: Demanda):Observable<any>{
    return this.http.put("http://localhost:3000/demanda/"+ demanda.iddemandas,demanda);
  }
  deleteDemanda(demaId: number): Observable<any>{
    console.log(demaId)
    return this.http.delete("http://localhost:3000/demanda/" + demaId);
  }
}
