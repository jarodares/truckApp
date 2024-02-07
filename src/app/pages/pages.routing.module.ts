import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'calendar',
    component: CalendarPageComponent
  },
  {
    path:'time',
    component:CalculatorPageComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
