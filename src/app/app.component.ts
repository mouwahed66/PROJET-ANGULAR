import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() sessionItem:any;
  nbpart:number=0;
  firstSession={
    id:1,
    name:'Formation Web',
    track:'MEAN Stack',
    date:new Date('2018-06-13'),
    duree:3,
    local:'Lyon',
    participants:0
  };
  nbrParticipantsChange(event){
    this.nbpart=event.value;
  }
}
