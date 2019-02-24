import { Injectable } from '@angular/core';
import { Osobni } from '../models/osobni.model';

@Injectable()
export class KrvnaSlikaService {

  stupanjGlukoza: number;
  stupanjUkupniKolesterol: number;
  stupanjLdlKolesterol: number;
  stupanjHdlKolesterol: number;
  stupanjTrigliceridi: number;

  glukozaPoruka(osobni: Osobni) {
    let porukaGlukoza = '';

    if (osobni.glukoza < 4.5) {
      porukaGlukoza = 'Vrijednost ispod referentnih vrijednosti.' +
        ' Nalazite se u hipoglikemiji.' +
        ' Rizik za razvoj dijabetesa tipa 2: Nizak' +
        ' Rizik za razvoj kardiovaskularnih bolesti: Nizak';
      this.stupanjGlukoza = 0;
    } else if (4.5 <= osobni.glukoza && osobni.glukoza < 6.5) {
      porukaGlukoza = 'Vrijednost unutar referentnih intervala.' +
        ' Rizik za razvoj dijabetesa tipa 2: Normalan' +
        ' Rizik za razvoj kardiovaskularnih bolesti: Normalan';
      this.stupanjGlukoza = 1;
    } else if (6.5 <= osobni.glukoza && osobni.glukoza < 8.5) {
      porukaGlukoza = 'Vrijednost iznad referentnih vrijednosti. ' +
        ' Nalazite se u hiperglikemiji.' +
        ' Rizik za razvoj dijabetesa tipa 2: Visok' +
        ' Rizik za razvoj kardiovaskularnih bolesti: Visok' +
        ' Vaša razina glukoze u krvi je visoka i zahtjeva hitno djelovanje!' +
        ' Nekontrolirana hiperglikemija u kratkom roku dovodi do dijabetesa tipa 2,' +
        ' visokog krvnog tlaka, debljanja, metaboličkog sindroma i raznih drugih bolesti.' +
        ' Stoga je potrebno djelovati na vrijeme.' +
        ' Za snižavanje glukoze u krvi i sprječavanje razvoja dijabetesa tipa 2' +
        ' pomoći će Vam Salengei Active Resveratrol kapsule sa 100% prirodnim ekstraktom' +
        ' korijena japanskog dvornika. Ovaj proizvod aktivira posebne GLUT4 receptore na' +
        ' stanicama i tako potiče unos glukoze u stanicu, i snižavanje njene razine u krvi.' +
        ' Salengei Active Resveratrol možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
        ' Za više informacija o proizvodu i savjete o načinu kontrole gukoze u krvi nazovite' +
        ' 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
      this.stupanjGlukoza = 2;
    } else {
      porukaGlukoza = 'Vrijednost iznad referentnih vrijednosti. ' +
        ' Nalazite se u hiperglikemiji.' +
        ' Rizik za razvoj dijabetesa tipa 2: Visok' +
        ' Rizik za razvoj kardiovaskularnih bolesti: Visok' +
        ' Vaša razina glukoze u krvi je visoka i zahtjeva hitno djelovanje!' +
        ' Nekontrolirana hiperglikemija u kratkom roku dovodi do dijabetesa tipa 2,' +
        ' visokog krvnog tlaka, debljanja, metaboličkog sindroma i raznih drugih bolesti.' +
        ' Stoga je potrebno djelovati na vrijeme.' +
        ' Za snižavanje glukoze u krvi i sprječavanje razvoja dijabetesa tipa 2' +
        ' pomoći će Vam Salengei Active Resveratrol kapsule sa 100% prirodnim ekstraktom' +
        ' korijena japanskog dvornika. Ovaj proizvod aktivira posebne GLUT4 receptore na' +
        ' stanicama i tako potiče unos glukoze u stanicu, i snižavanje njene razine u krvi.' +
        ' Salengei Active Resveratrol možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
        ' Za više informacija o proizvodu i savjete o načinu kontrole gukoze u krvi nazovite' +
        ' 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
      this.stupanjGlukoza = 3;
    }
    console.log(this.stupanjGlukoza);

    return porukaGlukoza;
  }

  ukupniKolPoruka(osobni: Osobni) {
    let porukaUkupniKolesterol = '';

    if (osobni.ukupniKolesterol < 4) {
      porukaUkupniKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
      this.stupanjUkupniKolesterol = 0;
    } else if (4 <= osobni.ukupniKolesterol && osobni.ukupniKolesterol < 5) {
      porukaUkupniKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
      this.stupanjUkupniKolesterol = 1;
    } else if (5 <= osobni.ukupniKolesterol && osobni.ukupniKolesterol < 6) {
      porukaUkupniKolesterol = 'Vrijednost iznad referentnih vrijednosti. Rizik za razvoj kardiovaskularnih bolesti: Visok' +
        ' Razina Vašeg kolesterola je povišena! Dugotrajna i nekontrolirana visoka razina kolesterola u krvi' +
        ' povećava rizik od nastanka ateroskleroze i plakova na žilama, visokog krvnog tlaka,' +
        ' dijabetesa tipa 2 i na kraju, srčanog i moždanog udara.' +
        ' Potrebno je djelovati na vrijeme jer sva navedena stanja mogu biti opasna po život!' +
        ' Za snižavanje ovih vrijednosti i sprječavanje srčanog incidenta pomoći će Vam' +
        ' Udos Oil Omega 3,6,9 Blend – mješavina ulja bogata omega 3,6 i 9 masnim kiselinama' +
        ' koje dokazano smanjuju razinu kolesterola i triglicerida u krvi!' +
        ' Osim toga snizuju visoki krvni tlak, sprječavaju srčani i moždani udar,' +
        ' podižu energiju i omogućuju da se osjećate bolje! U kombinaciji s pravilno' +
        ' prilagođenom prehranom u dosadašnjem radu nam se pokazao kao najbolji proizvod' +
        ' za snižavanje razine kolesterola u krvi.' +
        ' Udo ulje možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
        ' Za više informacija o proizvodu i savjete o kontroliranju razine kolesterola' +
        ' u krvi nazovite 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
      this.stupanjUkupniKolesterol = 2;
    } else {
      porukaUkupniKolesterol = 'Vrijednost iznad referentnih vrijednosti. Rizik za razvoj kardiovaskularnih bolesti: Visok' +
        ' Razina Vašeg kolesterola je povišena! Dugotrajna i nekontrolirana visoka razina kolesterola u krvi' +
        ' povećava rizik od nastanka ateroskleroze i plakova na žilama, visokog krvnog tlaka,' +
        ' dijabetesa tipa 2 i na kraju, srčanog i moždanog udara.' +
        ' Potrebno je djelovati na vrijeme jer sva navedena stanja mogu biti opasna po život!' +
        ' Za snižavanje ovih vrijednosti i sprječavanje srčanog incidenta pomoći će Vam' +
        ' Udos Oil Omega 3,6,9 Blend – mješavina ulja bogata omega 3,6 i 9 masnim kiselinama' +
        ' koje dokazano smanjuju razinu kolesterola i triglicerida u krvi!' +
        ' Osim toga snizuju visoki krvni tlak, sprječavaju srčani i moždani udar,' +
        ' podižu energiju i omogućuju da se osjećate bolje! U kombinaciji s pravilno' +
        ' prilagođenom prehranom u dosadašnjem radu nam se pokazao kao najbolji proizvod' +
        ' za snižavanje razine kolesterola u krvi.' +
        ' Udo ulje možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
        ' Za više informacija o proizvodu i savjete o kontroliranju razine kolesterola' +
        ' u krvi nazovite 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
      this.stupanjUkupniKolesterol = 3;
    }
    console.log(this.stupanjUkupniKolesterol);

    return porukaUkupniKolesterol;
  }

  ldlKolPoruka(osobni: Osobni) {
    let porukaldlKolesterol = '';

    if (osobni.ldlKolesterol < 1) {
      porukaldlKolesterol = 'Vrijednost iznad referentnih vrijednosti. Rizik za razvoj kardiovaskularnih bolesti: Visok' +
        ' Razina Vašeg kolesterola je povišena! Dugotrajna i nekontrolirana visoka razina kolesterola u krvi' +
        ' povećava rizik od nastanka ateroskleroze i plakova na žilama, visokog krvnog tlaka,' +
        ' dijabetesa tipa 2 i na kraju, srčanog i moždanog udara.' +
        ' Potrebno je djelovati na vrijeme jer sva navedena stanja mogu biti opasna po život!' +
        ' Za snižavanje ovih vrijednosti i sprječavanje srčanog incidenta pomoći će Vam' +
        ' Udos Oil Omega 3,6,9 Blend – mješavina ulja bogata omega 3,6 i 9 masnim kiselinama' +
        ' koje dokazano smanjuju razinu kolesterola i triglicerida u krvi!' +
        ' Osim toga snizuju visoki krvni tlak, sprječavaju srčani i moždani udar,' +
        ' podižu energiju i omogućuju da se osjećate bolje! U kombinaciji s pravilno' +
        ' prilagođenom prehranom u dosadašnjem radu nam se pokazao kao najbolji proizvod' +
        ' za snižavanje razine kolesterola u krvi.' +
        ' Udo ulje možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
        ' Za više informacija o proizvodu i savjete o kontroliranju razine kolesterola' +
        ' u krvi nazovite 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
      this.stupanjLdlKolesterol = 0;
    } else if (1 <= osobni.ldlKolesterol && osobni.ldlKolesterol < 3) {
      porukaldlKolesterol = 'Nalaz uredan. Imate smanjen rizik od nastanka kardiovaskularnih bolesti';
      this.stupanjLdlKolesterol = 1;
    } else if (3 <= osobni.ldlKolesterol && osobni.ldlKolesterol < 5) {
      porukaldlKolesterol = 'Vrijednost unutar referentnih vrijednosti. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
      this.stupanjLdlKolesterol = 2;
    } else {
      porukaldlKolesterol = 'Vrijednost unutar referentnih vrijednosti. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
      this.stupanjLdlKolesterol = 3;
    }
    console.log(this.stupanjLdlKolesterol);

    return porukaldlKolesterol;
  }

  hdlKolPoruka(osobni: Osobni) {
    let porukahdlKolesterol = '';

    if (osobni.spol === 'm') {
      if (1 >= osobni.hdlKolesterol) {
        porukahdlKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
        this.stupanjHdlKolesterol = 0;
      } else {
        porukahdlKolesterol = 'Vrijednost iznad referentnih vrijednosti.' +
          ' Rizik za razvoj kardiovaskularnih bolesti: Visok' +
          ' HDL kolesterol je tzv. „dobri“ kolesterol i uvelike pomaže u održavanju normalnih vrijednosti LDL,' +
          ' odnosno „lošeg“ kolesterola i trigliceriga u krvi.' +
          ' Pritom sprječava razvoj ozbiljnih bolesti srčano-krvožilnog sustava poput ateroskleroze' +
          ' i potpunog začepljenja krvnih žila. Zbog toga je bitno da nam razine HDL kolesterola budu što više.' +
          ' Niske vrijednosti HDL kolesterola zahtjevaju brzo djelovanje!' +
          ' Pravilna prehrana i Active More DHA će Vam pomoći pri postizanju normalnih vrijednosti HDL kolesterola u krvi.' +
          ' Active More DHA je proizvod koji u jednoj kapsuli sadrži čak 700 mg DHA omega masne kiseline' +
          ' koja će pomoći pri snižavanju vrijednosti „lošeg“ kolesterola i podizanju vrijednosti „dobrog“.' +
          ' Ojačati će Vaše srce i krvne žile i omogućiti Vam da se osjećate manje umorno.' +
          ' Active More DHA možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
          ' Za više informacija o proizvodu i besplatno savjetovanje o načinu podizanja razine' +
          ' HDL kolesterola u krvi nazovite 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
        this.stupanjHdlKolesterol = 1;
      }
    } else {
      if (1.2 >= osobni.hdlKolesterol) {
        porukahdlKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
        this.stupanjHdlKolesterol = 0;
      } else {
        porukahdlKolesterol = 'Vrijednost iznad referentnih vrijednosti.' +
          ' Rizik za razvoj kardiovaskularnih bolesti: Visok' +
          ' HDL kolesterol je tzv. „dobri“ kolesterol i uvelike pomaže u održavanju normalnih vrijednosti LDL,' +
          ' odnosno „lošeg“ kolesterola i trigliceriga u krvi.' +
          ' Pritom sprječava razvoj ozbiljnih bolesti srčano-krvožilnog sustava poput ateroskleroze' +
          ' i potpunog začepljenja krvnih žila. Zbog toga je bitno da nam razine HDL kolesterola budu što više.' +
          ' Niske vrijednosti HDL kolesterola zahtjevaju brzo djelovanje!' +
          ' Pravilna prehrana i Active More DHA će Vam pomoći pri postizanju normalnih vrijednosti HDL kolesterola u krvi.' +
          ' Active More DHA je proizvod koji u jednoj kapsuli sadrži čak 700 mg DHA omega masne kiseline' +
          ' koja će pomoći pri snižavanju vrijednosti „lošeg“ kolesterola i podizanju vrijednosti „dobrog“.' +
          ' Ojačati će Vaše srce i krvne žile i omogućiti Vam da se osjećate manje umorno.' +
          ' Active More DHA možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
          ' Za više informacija o proizvodu i besplatno savjetovanje o načinu podizanja razine' +
          ' HDL kolesterola u krvi nazovite 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
        this.stupanjHdlKolesterol = 1;
      }
    }
    console.log(this.stupanjHdlKolesterol);

    return porukahdlKolesterol;
  }

  trigliceridiPoruka(osobni: Osobni) {
    let porukaTrigliceridi = '';

    if (osobni.trigliceridi < 1.7) {
      porukaTrigliceridi = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
      this.stupanjTrigliceridi = 0;
    } else if (1.7 <= osobni.trigliceridi && osobni.trigliceridi < 3) {
      porukaTrigliceridi = 'Vrijednost iznad referentnih vrijednosti. Vrijednost iznad referentnih vrijednosti.' +
        ' Rizik za razvoj kardiovaskularnih bolesti: Visok' +
        ' Trigliceridi su zasićene masne kiseline koje se ugrađuju u stanice našeg organizma' +
        ' i čine ih ljepljivima i krutima.' +
        ' Prvo se ugrađuju u stanice krvnih žila koje potom postaju neelastične' +
        ' i podložne neželjenim promjenama. Kao prvi simptom ove pojave javlja se povišeni krvni tlak,' +
        ' a potom i ateroskleroza i povišene vrijednosti drugih parametara.' +
        ' Na kraju, ukoliko ne djelujemo na vrijeme, dolazi do začepljenja krvnih žila što može uzrokovati moždani' +
        ' ili srčani udar i prijevremenu smrt.' +
        ' Povišene vrijednosti triglicerida nisu uvijek praćene povišenim vrijednostima kolesterola i glukoze u krvi,' +
        ' ali ukoliko se ne djeluje na vrijeme, uvijek vode ka tome.' +
        ' Prvi korak prevencije je pravilna i uravnotežena prehrana praćena pravom suplementacijom.' +
        ' Salengei Active Cardisterol je jedini proizvod koji djeluje na sva područja zdravlja srčano-krvožilnog sustava.' +
        ' Snizuje razinu trigliceriga u krvi i sprječava daljnje promjene na krvnim žilama.' +
        ' Snizuje razinu „lošeg“, a povisuje razinu „dobrog“ kolesterola, snizuje krvni tlak i poboljšava cirkulaciju.' +
        ' Salengei Active Cardisterol možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
        ' Za više informacija o proizvodu i besplatno savjetovanje o načinu reguliranja razine triglicerida u krvi' +
        ' nazovite 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
      this.stupanjTrigliceridi = 1;
    } else {
      porukaTrigliceridi = 'Vrijednost iznad referentnih vrijednosti. Vrijednost iznad referentnih vrijednosti.' +
        ' Rizik za razvoj kardiovaskularnih bolesti: Visok' +
        ' Trigliceridi su zasićene masne kiseline koje se ugrađuju u stanice našeg organizma' +
        ' i čine ih ljepljivima i krutima.' +
        ' Prvo se ugrađuju u stanice krvnih žila koje potom postaju neelastične' +
        ' i podložne neželjenim promjenama. Kao prvi simptom ove pojave javlja se povišeni krvni tlak,' +
        ' a potom i ateroskleroza i povišene vrijednosti drugih parametara.' +
        ' Na kraju, ukoliko ne djelujemo na vrijeme, dolazi do začepljenja krvnih žila što može uzrokovati moždani' +
        ' ili srčani udar i prijevremenu smrt.' +
        ' Povišene vrijednosti triglicerida nisu uvijek praćene povišenim vrijednostima kolesterola i glukoze u krvi,' +
        ' ali ukoliko se ne djeluje na vrijeme, uvijek vode ka tome.' +
        ' Prvi korak prevencije je pravilna i uravnotežena prehrana praćena pravom suplementacijom.' +
        ' Salengei Active Cardisterol je jedini proizvod koji djeluje na sva područja zdravlja srčano-krvožilnog sustava.' +
        ' Snizuje razinu trigliceriga u krvi i sprječava daljnje promjene na krvnim žilama.' +
        ' Snizuje razinu „lošeg“, a povisuje razinu „dobrog“ kolesterola, snizuje krvni tlak i poboljšava cirkulaciju.' +
        ' Salengei Active Cardisterol možete kupiti ovdje ili u našoj trgovini u Lovretskoj 10 u Splitu.' +
        ' Za više informacija o proizvodu i besplatno savjetovanje o načinu reguliranja razine triglicerida u krvi' +
        ' nazovite 021 688 888 ili nas kontaktirajte mailom na nutricionist@mcanaliza.org';
      this.stupanjTrigliceridi = 2;
    }
    console.log(this.stupanjTrigliceridi);

    return porukaTrigliceridi;
  }

  getRizikKKS() {
    let stupanjRizikaKks: number;

    stupanjRizikaKks = this.stupanjGlukoza
      + this.stupanjUkupniKolesterol
      + this.stupanjLdlKolesterol
      + this.stupanjHdlKolesterol
      + this.stupanjTrigliceridi;

    console.log(stupanjRizikaKks);

    return stupanjRizikaKks;
  }
}
