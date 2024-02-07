import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    CalendarComponent,
    CalculatorComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule { }
