import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommons',
  templateUrl: './uncommons.component.html',
  styleUrls: ['./uncommons.component.css']
})
export class UncommonsComponent implements OnInit {

  name: string = 'Eliecer';
  genre: string = 'male';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
