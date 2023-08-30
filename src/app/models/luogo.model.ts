export class Luogo{
    luogo:string;
    latitudine:number;
    longitudine:number;
    altitudine:number;
    clima:string;
  
    constructor(luogo:string, latitudine:number, longitudine:number,altitudine:number, clima:string,  ) {
      this.luogo = luogo;
      this.latitudine = latitudine;
      this.longitudine = longitudine;
      this.altitudine = altitudine;
      this.clima = clima;
    }
}