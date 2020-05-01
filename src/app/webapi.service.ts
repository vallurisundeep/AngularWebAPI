  
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Webapi } from './webapi';
@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private httpClient:HttpClient) {


   }

   getAllPosts():Observable<Webapi[]>{
      
    return this.httpClient.get<Webapi[]>("http://dummy.restapiexample.com/api/v1/employees");
   }
}
