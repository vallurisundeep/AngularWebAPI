import { Component } from '@angular/core';
import { WebapiService } from './webapi.service';
import{Webapi} from './webapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapi';
//Webapis:Webapi[];
Webapis:any;
flgnoData:boolean=false;
constructor(private webapiService:WebapiService) { }


getEmployees(){
 
  this.webapiService.getAllPosts().subscribe(
    (response:Webapi[])=>{
    if(response.length>0 && response!=undefined && response!=null){
    this.Webapis=response;

    this.flgnoData=true;
    }
    });
}
  
}
