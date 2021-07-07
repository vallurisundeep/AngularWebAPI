  
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Webapi } from './webapi';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private httpClient:HttpClient) {


   }

   getAllPosts():Observable<Data>{
      
    return this.httpClient.get<Data>("http://localhost:5000/posts");
   }

   getData(){
     let url="http://localhost:5000/posts/60e33eb3c10c73a73c857531";
     return this.httpClient.get(url);
   }


}
