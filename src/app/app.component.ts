import { Component } from '@angular/core';
import { Luogo } from './models/luogo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaLuoghi!: Luogo[];
  constructor(){
    this.listaLuoghi=[
      {
          "luogo": "Milano",
          "latitudine": 45.4654219,
          "longitudine": 9.1859243,
          "altitudine": 120, 
          "clima": "temperato umido"
      },
      {
          "luogo": "Roma",
          "latitudine": 41.9027835,
          "longitudine": 12.4963655,
          "altitudine": 21, 
          "clima": "mediterraneo"
      },
      {
          "luogo": "Aosta",
          "latitudine": 45.734955,
          "longitudine": 7.313076,
          "altitudine": 583, 
          "clima": "alpino"
      },
      {
          "luogo": "Palermo",
          "latitudine": 38.1156879,
          "longitudine": 13.3612671,
          "altitudine": 14, 
          "clima": "mediterraneo"
      }
  ]
  }
  ordineAltitudineD(): boolean{
    this.listaLuoghi = this.listaLuoghi.sort((a: Luogo, b: Luogo) => b.altitudine - a.altitudine);
    return false;
  }
  ordineAlfabetico(): boolean{
    this.listaLuoghi = this.listaLuoghi.sort((a, b) => a.luogo.localeCompare(b.luogo));
    return false;
  }

}
