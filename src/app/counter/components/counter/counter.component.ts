import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>{{contador}}</h1>
  <button (click)="sum(+1)">+1</button>
  <button (click)="sum(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent  {
  constructor() { }

  public contador: number =0

  sum(digito:number):void{
    this.contador += digito;
  }

  reset (): void {
    this.contador=0;
  }

}
