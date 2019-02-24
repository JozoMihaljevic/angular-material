import { Component, OnInit } from '@angular/core';
import { Osobni } from '../models/osobni.model';
import { BmiService } from '../services/bmi.service';
import { WhrService } from '../services/whr.service';
import { HomaService } from 'app/services/homa.service';
import { KrvnaSlikaService } from 'app/services/krvnaslika.service';
import { KalkulatorRizikaService } from 'app/services/kalkulatorrizika.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  isSubmitted = false;
  spolovi: string[] = ['Muškarac', 'Žena'];
  osobni: Osobni;
  bmi: number = null;
  whr: number = null;
  whr2: number = null;
  bodyFatPostotak: number = null;
  preporucenaTjelesnaMasa: number = null;
  bmiPoruka = '';
  bodyFatPostotakPoruka = '';
  whrPoruka = '';
  homaIr: number = null;
  homaIrPoruka = '';
  homaBeta: number;
  homaBetaPoruka = '';
  glukozaPoruka = '';
  ukupniKolesterolPoruka = '';
  ldlKolesterolPoruka = '';
  hdlKolesterolPoruka = '';
  trigliceridiPoruka = '';
  rizikUkupni: number = null;
  rizikUkupniPoruka = '';
  rizikUkupniPostotak: number = null;
  rizikKks: number = null;
  rizikHoma: number = null;
  rizikWHR: number = null;
  rizikBMI: number = null;

  constructor(
    private bmiService: BmiService,
    private whrService: WhrService,
    private homaService: HomaService,
    private krvnaSlikaService: KrvnaSlikaService,
    private kalkulatorRizikaService: KalkulatorRizikaService
  ) { }

  ngOnInit() {
    this.osobni = new Osobni();
    console.log(this.osobni);
  }

  calculateBmi() {
    this.bmi = this.bmiService.getBmi(this.osobni);
    this.bodyFatPostotak = this.bmiService.getBodyFatPostotak(this.osobni, this.bmi);
    this.preporucenaTjelesnaMasa = this.bmiService.getPreporucenaTjelesnaMasa(this.osobni);
    this.bmiPoruka = this.bmiService.bmiPoruka(this.bmi);
    this.bodyFatPostotakPoruka = this.bmiService.bodyFatPostotakPoruka(this.bodyFatPostotak, this.osobni);
    this.rizikBMI = this.bmiService.getRizikBMIBFP();
  }

  calculateWhr() {
    this.whr = this.whrService.getWhr(this.osobni);
    this.whrPoruka = this.whrService.whrPoruka(this.osobni, this.whr);
    this.whr2 = this.whrService.getWhr2(this.osobni);
    this.rizikWHR = this.whrService.getRizikWHR(this.osobni);
    console.log(this.rizikWHR);
  }

  calculateHoma() {
    this.homaIr = this.homaService.getHomaIr(this.osobni);
    this.homaIrPoruka = this.homaService.homaIrPoruka(this.homaIr);
    this.homaBeta = this.homaService.getHomaBeta(this.osobni);
    this.homaBetaPoruka = this.homaService.homaBetaPoruka(this.homaBeta);
    this.rizikHoma = this.homaService.getRizikHoma(this.osobni);
  }

  calculateKks() {
    this.glukozaPoruka = this.krvnaSlikaService.glukozaPoruka(this.osobni);
    this.ukupniKolesterolPoruka = this.krvnaSlikaService.ukupniKolPoruka(this.osobni);
    this.ldlKolesterolPoruka = this.krvnaSlikaService.ldlKolPoruka(this.osobni);
    this.hdlKolesterolPoruka = this.krvnaSlikaService.hdlKolPoruka(this.osobni);
    this.trigliceridiPoruka = this.krvnaSlikaService.trigliceridiPoruka(this.osobni);
    this.rizikKks = this.krvnaSlikaService.getRizikKKS();
  }

  calculateRisk() {
    this.rizikUkupni = this.kalkulatorRizikaService.racunajUkupniRizik(this.rizikKks, this.rizikHoma, this.rizikWHR, this.rizikBMI);
    this.rizikUkupniPoruka = this.kalkulatorRizikaService.ukupniRizikPoruka(this.rizikUkupni);
    this.rizikUkupniPostotak = this.kalkulatorRizikaService.racunajUkupniRizikPostotak(this.osobni);
  }

  onChange() {
    this.calculateBmi();
    this.calculateWhr();
  }

  onReset() {
    this.osobni = new Osobni();
    this.bmi = null;
    this.whr = null;
    this.whr2 = null;
  }

  onSubmit() {
    console.log(this.osobni);
    this.calculateBmi();
    this.calculateWhr();
    this.calculateHoma();
    this.calculateKks();
    this.calculateRisk();
    console.log(this.rizikUkupni);
    this.isSubmitted = true;
  }
}
