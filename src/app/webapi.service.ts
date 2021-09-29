  
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { empService } from './webapi';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private httpClient:HttpClient) {


   }

   getAllPosts():Observable<Data>{
      
    return this.httpClient.get<Data>("http://localhost:3000/posts");
   }

   


}
