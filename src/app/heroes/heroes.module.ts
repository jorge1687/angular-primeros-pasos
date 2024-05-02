import { NgModule } from "@angular/core";

//este import CommonModule se debe hacer en los modulos personalizados o propios que se crean
//porque angular por default no los incluye, para incluir dependencias de  *ngIf etc
import { CommonModule } from "@angular/common";


import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}
