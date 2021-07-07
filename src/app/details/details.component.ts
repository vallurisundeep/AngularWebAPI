import { Component, OnInit } from '@angular/core';
import { WebapiService } from './../webapi.service';
import{Webapi} from '../webapi';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  //Webapis:Webapi[];
  Webapis:any;
  flgnoData:boolean=false;
  constructor(private webapiService:WebapiService) { }

  ngOnInit() {
    this.webapiService.getAllPosts().subscribe(
(response:Webapi[])=>{
  if(response.length>0 && response!=undefined && response!=null){
  this.Webapis=response;

  this.flgnoData=true;
  }
}
    );

    var data1=this.webapiService.getData();
    console.log(data1)
  }



}
