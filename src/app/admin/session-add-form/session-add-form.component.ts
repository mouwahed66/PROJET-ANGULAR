import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-add-form',
  providers:[FakeSessionItemService],
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService:FakeSessionItemService) { }

  ngOnInit(): void {
  }
  addSession(sessionItem){
    console.log(sessionItem.name);
  }
  
}
