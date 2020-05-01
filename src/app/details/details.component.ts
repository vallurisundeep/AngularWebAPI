import { Component, OnInit } from '@angular/core';
import { WebapiService } from './../webapi.service';
import{Webapi} from '../webapi';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  Webapis:Webapi[];
  constructor(private webapiService:WebapiService) { }

  ngOnInit() {
    this.webapiService.getAllPosts().subscribe(
(response:Webapi[])=>{
  debugger
  this.Webapis=response;
}
    );
  }

}
