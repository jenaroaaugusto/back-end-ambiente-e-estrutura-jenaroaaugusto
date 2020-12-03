import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demanda} from './demandas/demandas.component';
import { Globals } from './globals/globals';


@Injectable({
  providedIn: 'root'
})
export class DemandasService {

  constructor(private http: HttpClient,private globals:Globals ) {}

  getDemandas():Observable<Demanda[]>{
    return this.http.get<Demanda[]>("http://localhost:3000/demanda",this.header());

  }
  getDemanda(demaId: number): Observable<Demanda>{
    console.log(demaId)
    return this.http.get<Demanda>("http://localhost:3000/demanda/" + demaId,this.header());
  }

  setDemanda(demanda: Demanda):Observable<any>{
    return this.http.post("http://localhost:3000/demanda",demanda,this.header());
  }

  updateDemanda(demanda: Demanda):Observable<any>{
    return this.http.put("http://localhost:3000/demanda/"+ demanda.iddemandas,demanda,this.header());
  }
  deleteDemanda(demaId: number): Observable<any>{
    console.log(demaId)
    return this.http.delete("http://localhost:3000/demanda/" + demaId,this.header());
  }

  header(){
    return{ 
      headers: new HttpHeaders({'Content-Type':'application/json',
      'x-access-token':this.globals.loginData.token
      })
    };
  }
}
