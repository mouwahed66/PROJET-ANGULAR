import { Component, OnInit } from '@angular/core';
import { SessionHttpService } from '../session-http.service';
import { FakeSessionItemService } from '../fake-session-item.service';
import { Session } from '../Session';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-session-edit-form',
  providers:[FakeSessionItemService],
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id;
  session:Session;
  private sub:any;
  tracks=['MEAN','Angular','NodeJS','Android','Swift','Xamarin'];
  //session=new Session(1,'Web',this.tracks[0],new Date('2018-06-11'),10,'Lyon',0,false);
  constructor(private route:ActivatedRoute,private sessionItemService:FakeSessionItemService,
              private sessionhttp:SessionHttpService) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.id=params['id'];
    });
    this.session=this.sessionItemService.getSession(1);
  }

  editSession(sessionItem){
    console.log(sessionItem);
  }
}
