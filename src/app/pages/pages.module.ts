import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { PagesRoutingModule } from './pages.routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CalendarPageComponent,
    HomePageComponent,
    CalculatorPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
