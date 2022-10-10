import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonsComponent } from './pages/uncommons/uncommons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';



@NgModule({
  declarations: [
    NumbersComponent,
    UncommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  exports: [
    NumbersComponent,
    UncommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
