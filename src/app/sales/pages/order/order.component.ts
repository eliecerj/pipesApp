import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor() { }

  upperLowerCase: boolean = false;

  upperOrLowerCase() {
    this.upperLowerCase = !this.upperLowerCase;
  }
}
