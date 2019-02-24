import { Injectable } from '@angular/core';
import { Osobni } from '../models/osobni.model';

@Injectable()
export class HomaService {

  stupanjHomaIr: number;
  stupanjHomaBeta: number;

  getHomaIr(osobni: Osobni) {
    return (osobni.glukoza * osobni.inzulin) / 22.5;
  }

  getHomaBeta(osobni: Osobni) {
    return (20 * osobni.inzulin) / (osobni.glukoza - 3.5) / 100;
  }

  homaIrPoruka(homaIr: number) {
    let porukaHomaIr: string;

    if (homaIr < 0.5) {
      porukaHomaIr = 'Povećana osjetljivost na inzulin – izrazito nizak rizik za nastanakinzulinske rezistencije.'
        + 'Rizik za kardiovaskularne bolesti - Nizak';
      this.stupanjHomaIr = 0;
    } else if (0.5 <= homaIr && homaIr < 1.8) {
      porukaHomaIr = 'Normalna osjetljivost na inzulin – nizak rizik za nastanak inzulinske rezistencije.'
        + 'Rizik za kardiovaskularne bolesti - Normalan';
      this.stupanjHomaIr = 1;
    } else if (1.8 <= homaIr && homaIr < 2.9) {
      porukaHomaIr = 'Smanjena osjetljivost na inzulin – blago povećan rizik za nastanak inzulinske rezistencije.'
        + 'Rizik za kardiovaskularne bolesti - Blago povišen';
      this.stupanjHomaIr = 2;
    } else if (2.9 <= homaIr && homaIr < 4) {
      porukaHomaIr = 'Smanjena osjetljivost na inzulin – visok rizik za nastanak inzulinske rezistencije.'
        + 'Rizik za kardiovaskularne bolesti - Povišen';
      this.stupanjHomaIr = 3;
    } else {
      porukaHomaIr = 'Izrazito visok rizik za nastanak inzulinske rezistencije – preddijabetičko stanje.'
        + 'Rizik za kardiovaskularne bolesti - Visok';
      this.stupanjHomaIr = 4;
    }
    return porukaHomaIr;
  }

  homaBetaPoruka(homaBeta: number) {
    let porukaHomaBeta: string;

    if (homaBeta < 0.12) {
      porukaHomaBeta = 'Normalna aktivnost beta otočića - izrazito nizak rizik za nastanak dijabetesa tipa 2.'
        + 'Rizik za kardiovaskularne bolesti - Nizak';
      this.stupanjHomaBeta = 0;
    } else if (0.12 <= homaBeta && homaBeta < 0.5) {
      porukaHomaBeta = 'Normalna aktivnost beta otočića – nizak rizik za nastanak dijabetesa tipa 2.'
        + 'Rizik za kardiovaskularne bolesti - Normalan';
      this.stupanjHomaBeta = 1;
    } else if (0.5 <= homaBeta && homaBeta < 0.56) {
      porukaHomaBeta = 'Smanjena aktivnost beta otočića – povišen rizik za nastanak dijabetesa tipa 2.'
        + 'Rizik za kardiovaskularne bolesti - Blago povišen';
      this.stupanjHomaBeta = 2;
    } else if (0.56 <= homaBeta && homaBeta < 0.64) {
      porukaHomaBeta = 'Smanjena aktivnost beta otočića – visok rizik za nastanak dijabetesa tipa 2.'
        + 'Rizik za kardiovaskularne bolesti - Povišen';
      this.stupanjHomaBeta = 3;
    } else {
      porukaHomaBeta = 'Izrazito smanjena aktivnost beta otočića – izrazito visok rizik za nastanak dijabetesa tipa 2.'
        + 'Rizik za kardiovaskularne bolesti - Visok';
      this.stupanjHomaBeta = 4;
    }
    return porukaHomaBeta;
  }

  getRizikHoma(osobni: Osobni) {
    let stupanjRizikaHoma: number;
    if (osobni.inzulin === null) {
      stupanjRizikaHoma = 0;
    } else {
      stupanjRizikaHoma = this.stupanjHomaIr + this.stupanjHomaBeta;
    }

    console.log(stupanjRizikaHoma);

    return stupanjRizikaHoma;
  }
}
