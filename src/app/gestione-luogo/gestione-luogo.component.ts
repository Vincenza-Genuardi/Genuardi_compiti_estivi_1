import { Component, Input } from '@angular/core';
import { Luogo } from '../models/luogo.model';

@Component({
  selector: 'app-gestione-luogo',
  templateUrl: './gestione-luogo.component.html',
  styleUrls: ['./gestione-luogo.component.css']
})
export class GestioneLuogoComponent {
  @Input() datiLuogo!:Luogo;
  
  
  clima_stringa():string{
    return this.datiLuogo.clima.replace(/ /g, '_');
  }
}
