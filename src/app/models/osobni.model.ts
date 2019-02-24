export class Osobni {
  spol: string;
  dijabetes: boolean;
  incident: boolean;
  pusac: boolean;
  godine: number;
  visina: number;
  masa: number;
  bokovi: number;
  struk: number;
  glukoza: number;
  inzulin: number;
  ukupniKolesterol: number;
  hdlKolesterol: number;
  ldlKolesterol: number;
  trigliceridi: number;

  constructor() {
    this.spol = 'Muškarac';
    this.dijabetes = false;
    this.incident = false;
    this.pusac = false;
    this.godine = null;
    this.visina = null;
    this.masa = null;
    this.bokovi = null;
    this.struk = null;
    this.glukoza = null;
    this.inzulin = null;
    this.ukupniKolesterol = null;
    this.hdlKolesterol = null;
    this.ldlKolesterol = null;
    this.trigliceridi = null;
  }
}
