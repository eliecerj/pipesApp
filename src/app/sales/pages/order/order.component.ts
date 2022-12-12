import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor() { }

  upperLowerCase: boolean = false;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      flight: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      flight: false,
      color: Color.negro
    },
    {
      name: 'Robin',
      flight: false,
      color: Color.verde
    },
    {
      name: 'Daredevil',
      flight: false,
      color: Color.rojo
    },
    {
      name: 'Linterna Verde',
      flight: true,
      color: Color.verde
    }
  ]

  upperOrLowerCase() {
    this.upperLowerCase = !this.upperLowerCase;
  }

  changeOrder(value: string) {
    this.orderBy = value;
    console.log(value);
    
  }
}
