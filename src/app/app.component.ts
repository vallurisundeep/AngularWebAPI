import { Component } from '@angular/core';
import { WebapiService } from './webapi.service';
import{empService} from './webapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listEmpData';
listEmpData:any;
flgnoData:boolean=false;
btnName:string="Show Employee Data";
constructor(private webapiService:WebapiService) { }


getEmployees(){
 if(this.flgnoData){
  this.flgnoData=false;
  this.btnName="Show Employees Data"
 }else{


  this.webapiService.getAllPosts().subscribe(
    (response:empService[])=>{
    if(response.length>0 && response!=undefined && response!=null){
    this.listEmpData=response;

    this.flgnoData=true;
    this.btnName="Hide Employees Data"
    }
    });
 }
  
}
  
}
