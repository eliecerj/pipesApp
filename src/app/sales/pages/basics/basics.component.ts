import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  nameLower: string = 'eliecer';
  nameUpper: string = 'ELIECER';
  completeName: string = 'eLieCer arTeAgA';

  fecha: Date = new Date();
  

 

}
