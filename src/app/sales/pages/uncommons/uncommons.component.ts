import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommons',
  templateUrl: './uncommons.component.html',
  styleUrls: ['./uncommons.component.css']
})
export class UncommonsComponent implements OnInit {

  // i18nSelect
  name: string = 'Eliecer';
  genre: string = 'male';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // 18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Sanet', 'Rosio'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
