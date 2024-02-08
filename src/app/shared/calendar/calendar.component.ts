import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  months: string[] = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  public days: number[] = []
  private multi: number = 0;
  selectedValue: number = 5
  daysL: number = 7;

  ngOnInit(): void {
    this.populateDays(this.multi,this.daysL)
  }

  populateDays(multiplier:number, day:number):void {
    let tmpArray: number[] = []
    for ( let i = 0; i < 12; i++){
      tmpArray.push(((multiplier*12) + i) * day)
    }
    this.days = tmpArray;
    this.arrShift(this.selectedValue);
  }

  increaseDays(): void {
    this.multi++;
    this.populateDays(this.multi,this.daysL);
  }

  decreaseDays(): void {
    if(this.multi > 0) {
      this.multi--
      this.populateDays(this.multi,this.daysL);
    }
  }

  getYear():number {
    return this.multi+1;
  }

  resetMultiplier(): void {
    this.multi = 0;
    this.populateDays(this.multi,this.daysL);
  }

  arrShift(idx:number):void {
    let tmp: number = 0;
    for(let i = 0; i < idx; i++){
      if(this.days.length > 0){
        tmp = this.days.pop()!;
      }
      this.days.unshift(tmp);
    }
  }

  rePop() : void {
    this.populateDays(this.multi, this.daysL)
  }

}
