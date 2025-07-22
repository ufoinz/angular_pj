import { Component } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-newcomp',
  standalone: true,
  imports: [],


  templateUrl: './newcomp.html',
  styleUrl: './newcomp.css'
})
export class Newcomp {
  display: string = '';

  clear() {
    this.display = '';
  }

  clearlast(){
    this.display = this.display.slice(0, -1);
  }

  appendInput(value: string) {
    this.display += value;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch(e) {
      this.display = 'Error';
    }
  }

  isOper() {
    this.display.match(/([^\+\-\*\/]+)$/);
    return true;
  }

  lenth() { //эксперементировал с нахождением длинны строки
            //чтобы попробовать сделать функцию для CE
    let last = this.isOper
    let len = this.display.length;
    this.display = '';
    this.display += len;
    let lenEnd = last ? last.length : 0;
  }

}