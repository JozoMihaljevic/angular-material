import { Injectable } from '@angular/core';
import { Osobni } from '../models/osobni.model';

@Injectable()
export class KalkulatorRizikaService {

  ukupniRizik: number = null;
  ukupniRizikPostotak: number = null;

  racunajUkupniRizik(rizikKks: number, rizikHoma: number, rizikWHR: number, rizikBMI: number) {
    this.ukupniRizik = rizikBMI + rizikWHR + rizikHoma + rizikKks;
    return this.ukupniRizik;
  }

  ukupniRizikPoruka(ukupniRizik) {
    let ukupniRizikPoruka: string;
    if (ukupniRizik <= 1) {
      ukupniRizikPoruka = 'Imate izrazito nizak rizik za nastanak kardiovaskularnih bolesti i dijabetesa tipa 2.' +
        ' Pravilna prehrana i redovna tjelesna aktivnost pomoći će pri održavanju Vašeg zdravlja.' +
        ' Zbog izrazito niskih vrijednosti navedenih parametara preporučuje se kontrola jetrenih proba' +
        ' (AST, ALT, GGT), željeza, feritina i bilirubina, jer unatoč svemu, imate povišen rizik od nastanka bolesti jetre.' +
        ' Kroz daljnju prehranu i životni stil trebali biste se usmjeriti na povećanje trenutne tjelesne težine' +
        ' i postotka tjelesne masti. Naši nutricionisti propisivanjem pravilne prehrane i suplementacije mogu Vas' +
        ' stručno i profesionalno voditi kroz taj proces na zdrav, individualan, prilagođen i Vama prihvatljiv način.' +
        ' Svi naši zaposlenici će Vas znati uputiti u daljnje korake.' +
        ' Dogovorite termin za vađenje krvi te besplatne konzultacije pozivom na broj 021 688 888' +
        ' ili porukom na e-mail info@mcanaliza.org.' +
        ' Napomena: Za navedene pretrage potrebno je doći natašte.';
    } else if (2 <= ukupniRizik && ukupniRizik <= 7) {
      ukupniRizikPoruka = 'Vaš rizik za nastanak kardiovaskularnih bolesti i dijabetesa tipa 2 je nizak.' +
        ' Pravilna prehrana i redovita tjelesna aktivnost pomoći će pri održavanju Vašeg zdravlja.' +
        ' Za održavanje postojećeg zdravstvenog stanja i sprječavanje nastanka navedenih bolesti' +
        ' jednom do dvaput godišnje kontrolirajte navedene parametre, a za sve dodatne informacije' +
        ' posavjetujte se s našim stručnjacima! Nazovite 021 688 888 ili pošaljite e-mail na info@mcanaliza.org' +
        ' i dogovorite svoj termin besplatnih konzultacija!' +
        ' U održavanju postojećeg zdravstvenog stanja mogu Vam pomoći neki od navedenih proizvoda:' +
        ' Udos Oil Omega 3,6,9 Blend' +
        ' Fermented Papaya Preparation (ImmunAge)' +
        ' Salengei Active More DHA' +
        ' Za savjetovanje o djelovanju i pravilnih primjeni ovih proizvoda posavjetujte se s našim stručnjacima' +
        ' na nutricionist@mcanaliza.org.';
    } else if (8 <= ukupniRizik && ukupniRizik <= 13) {
      ukupniRizikPoruka = 'Vaš rizik za nastajanje kardiovaskularnih bolesti i dijabetesa tipa 2 je normalan.' +
        '	Pravilna prehrana i redovita tjelesna aktivnost pomoći će pri održavanju Vašeg zdravlja.' +
        '	Za održavanje postojećeg zdravstvenog stanja i smanjenja rizika za nastanak navedenih bolesti' +
        '	kontrolirajte navedene parametre u redovnim intervalima od 6 mjeseci.' +
        '	Za uvid u potpunu sliku potrebno je još napraviti nalaze:' +
        '	AST, ALT, GGT, HbA1c, urea, kreatinin, urat, konjugirani i nekonjugirani bilirubin, homocistein.' +
        '	Svijest o pravilnoj prehrani bitan je faktor u očuvanju dobrog zdravlja.' +
        '	Za savjete o provođenju pravilne prehrane i načinima na koji možete pridonijeti svome zdravlju' +
        '	besplatno se posavjetujte s našim nutricionistima.' +
        '	Oni će Vas znati uputiti u način na koji ćete moći odrediti koja je hrana za Vas dobra, a koja ne,' +
        '	odnosno koje namirnice biste trebali izbjegavati, a koje biste trebali jesti češće.' +
        '	Nazovite 021 688 888 ili pošaljite e-mail na info@mcanaliza.org i dogovorite svoj termin besplatnih konzultacija.' +
        '	U održavanju postojećeg zdravstvenog stanja mogu Vam pomoći neki od navedenih proizvoda:' +
        '	Udos Oil Omega 3,6,9 Blend' +
        '	Fermented Papaya Preparation (ImmunAge)' +
        '	Salengei Active More DHA' +
        '	Salengei Active Memory' +
        '	Salengei Active Cardisterol' +
        '	Za savjetovanje o djelovanju i pravilnih primjeni ovih proizvoda posavjetujte se s našim stručnjacima' +
        '	na nutricionist@mcanaliza.org.';
    } else if (14 <= ukupniRizik && ukupniRizik <= 20) {
      ukupniRizikPoruka = 'Vaš rizik za nastajanje kardiovaskularnih bolesti i dijabetesa tipa 2 je blago povišen.' +
        '	Za uvid u potpunu sliku potrebno je još napraviti nalaze:' +
        '	AST, ALT, GGT, HbA1c, urea, kreatinin, urat, konjugirani i nekonjugirani bilirubin, homocistein' +
        '	te se potom javiti našim stručnjacima na interpretaciju!' +
        '	Svijest o pravilnoj prehrani bitan je faktor u očuvanju dobrog zdravlja.' +
        '	Za savjete o provođenju pravilne prehrane i načinima na koji možete pridonijeti svome zdravlju' +
        '	besplatno se posavjetujte s našim nutricionistima.' +
        '	Oni će Vas znati uputiti u način na koji ćete moći odrediti koja je hrana za Vas dobra, a koja ne,' +
        '	odnosno koje namirnice biste trebali izbjegavati, a koje biste trebali jesti češće.' +
        '	Nazovite 021 688 888 ili pošaljite e-mail na info@mcanaliza.org i dogovorite svoj termin besplatnih konzultacija.' +
        '	U održavanju postojećeg zdravstvenog stanja mogu Vam pomoći neki od navedenih proizvoda:' +
        '	Udos Oil Omega 3,6,9 Blend' +
        '	Fermented Papaya Preparation (ImmunAge)' +
        '	Salengei Active More DHA' +
        '	Salengei Active Memory' +
        '	Salengei Active Cardisterol' +
        '	Za savjetovanje o djelovanju i pravilnih primjeni ovih proizvoda posavjetujte se s našim stručnjacima' +
        '	na nutricionist@mcanaliza.org ili rezervirajte termin besplatnih konzultacija.';
    } else if (20 <= ukupniRizik && ukupniRizik <= 27) {
      ukupniRizikPoruka = 'Vaš rizik za nastajanje kardiovaskularnih bolesti i dijabetesa tipa 2 je visok!' +
        '	Vaše stanje zahtjeva djelovanje! Promjena životnog stila je nužna!' +
        '	Vaši rezultati pokazuju sklonost od nastanka metaboličkog sindroma' +
        '	– skupa metaboličkih poremećaja koji se manifestiraju visokim razinama' +
        '	glukoze, triglicerida i kolesterola u krvi, povišenim krvnim tlakom i nakupljanjem masnoga tkiva na području trbuha.' +
        '	Metabolički sindrom gotovo uvijek vodi ka nastanku bolesti poput dijabetesa tipa 2 te bolesti srca i krvnih žila.' +
        '	Metabolički sindrom najčešće je rezultat pogrešnog načina života (nedostatak tjelesne aktivnosti i sna, stres)' +
        '	i nepravilna i neredovite prehrane. Nepravilnu prehranu karakteriziraju rijetki obilni obroci,' +
        '	unos velike količine rafiniranih ugljikohidrata, trans-masti i zasićenih masnih kiselina,' +
        '	te pogrešan odabir unešene tekućine. Godine ovakvog života dovode do poremećaja rada gušterače' +
        '	i djelovanja inzulina te se razvija dijabetes tipa 2 i inzulinska rezistencija.' +
        '	Također dolazi do nakupljanja trans-masti i zasićenih masnih kiselina radi čega se javljaju' +
        '	ateroskleroza i povišen krvni tlak.' +
        '	Za uvid u potpunu sliku potrebno je još napraviti nalaze: AST, ALT, GGT, HbA1c, urea, kreatinin,' +
        '	urat, konjugirani i nekonjugirani bilirubin, homocistein te se potom javiti našim stručnjacima na interpretaciju!' +
        '	Promjena prehrane predstavlja jedino rješenje za metabolički sindrom!' +
        '	Pravilan raspored obroka i odabir namirnica, smanjen unos soli i povišen unos tekućine,' +
        '	dovode do znatnog poboljšanja simptoma!' +
        'Dopustite našim nutricionistima da Vam pomognu u reguliranju prehrane i redukciji simptoma!' +
        '	Dogovorite besplatne konzultacije odmah pozivom na broj 021 688 888 ili porukom na info@mcanaliza.org' +
        '	Kao potpora u prevenciji metaboličkog sindroma mogu Vam pomoći neki od navedenih proizvoda,' +
        '	a koje će Vam naši djelatnici rado preporučiti:' +
        '	Udos Oil Omega 3,6,9 Blend' +
        '	Fermented Papaya Preparation (ImmunAge)' +
        '	Salengei Active More DHA' +
        '	Salengei Active Memory' +
        '	Salengei Active Cardisterol' +
        '	Za savjetovanje o djelovanju i pravilnih primjeni ovih proizvoda posavjetujte se s našim stručnjacima' +
        '	na nutricionist@mcanaliza.org ili rezervirajte termin besplatnih konzultacija.';
    } else {
      ukupniRizikPoruka = 'Vaš rizik za nastajanje kardiovaskularnih bolesti i dijabetesa tipa 2 je vrlo visok!' +
        '	Za Vaše stanje pod hitno je potrebno djelovanje! Vaši rezultati pokazuju postojanje metaboličkog sindroma' +
        '	- skupa metaboličkih poremećaja koji se manifestiraju visokim razinama glukoze, triglicerida' +
        '	i kolesterola u krvi, povišenim krvnim tlakom i nakupljanjem masnoga tkiva na području trbuha.' +
        '	Metabolički sindrom gotovo uvijek vodi ka nastanku bolesti poput dijabetesa tipa 2 te bolesti srca i krvnih žila' +
        '	Metabolički sindrom najčešće je rezultat pogrešnog načina života' +
        '	(nedostatak tjelesne aktivnosti i sna, stres) i nepravilna i neredovite prehrane.' +
        '	Nepravilnu prehranu karakteriziraju rijetki obilni obroci, unos velike količine rafiniranih ugljikohidrata,' +
        '	trans-masti i zasićenih masnih kiselina, te pogrešan odabir unešene tekućine.' +
        '	Metabolički sindrom razvija se godinama. Postepeno dolazi do poremećaja rada gušterače' +
        '	i djelovanja inzulina te se razvija dijabetes tipa 2 i inzulinska rezistencija.' +
        '	Također dolazi do nakupljanja trans-masti i zasićenih masnih kiselina radi čega se javljaju ateroskleroza' +
        '	i povišen krvni tlak.' +
        '	Visoke vrijednosti glukoze i niske vrijednosti inzulina pokazuju prvu fazu inzulinske rezistencije' +
        '	i skoru pojavu simptoma dijabetesa tipa 2, dok visoke vrijednosti kolesterola i triglicerida u krvi' +
        '	dovode do začepljenja krvnih žila.' +
        '	Prva faza razvoja metaboličkog sindroma je povišenje krvnog tlaka (hipertenzija),' +
        '	što se se događa zbog smanjene elastičnosti krvnih žila. Potom dolazi do suženja krvnih žila (ateroskleoza),' +
        '	što se događa zbog nakupljanja naslaga kolesterola i triglicerida na već krutim stijenkama krvnih žila.' +
        '	Potom, zbog unosa velikog broja rafiniranih ugljikohidrata, dolazi do inzulinske rezistencije,' +
        '	što rezultira debljanjem i nakupljanjem suvišne vode u organizmu. Pojavljuju se edemi na zglobovima,' +
        '	masno tkivo na području trbuha, nedostatak daha... Sve ovo, ukoliko se ne djeluje na vrijeme,' +
        '	može rezultirati srčanim ili moždanim udarom i preuranjenom srmrću!' +
        '	Za uvid u potpunu sliku potrebno je još napraviti nalaze: AST, ALT, GGT, HbA1c, urea, kreatinin,' +
        '	urat, konjugirani i nekonjugirani bilirubin, homocistein te se potom javiti našim stručnjacima na interpretaciju!' +
        '	Promjena prehrane predstavlja jedino rješenje za metabolički sindrom!' +
        '	Pravilan raspored obroka i odabir namirnica, smanjen unos soli i povišen unos tekućine,' +
        '	dovode do znatnog poboljšanja simptoma!' +
        '	Dopustite našim nutricionistima da Vam pomognu u reguliranju prehrane' +
        '	i redukciji simptoma! Dogovorite besplatne konzultacije odmah pozivom na broj 021 688 888' +
        '	ili porukom na info@mcanaliza.org' +
        '	Kao potpora u prevenciji metaboličkog sindroma mogu Vam pomoći neki od navedenih proizvoda,' +
        '	a koje će Vam naši djelatnici rado preporučiti:' +
        '	Udos Oil Omega 3,6,9 Blend' +
        '	Fermented Papaya Preparation (ImmunAge)' +
        '	Salengei Active More DHA' +
        '	Salengei Active Memory' +
        '	Salengei Active Cardisterol' +
        '	Za savjetovanje o djelovanju i pravilnih primjeni ovih proizvoda posavjetujte se s našim stručnjacima' +
        '	na nutricionist@mcanaliza.org ili rezervirajte termin besplatnih konzultacija.';
    }
    return ukupniRizikPoruka;
  }

  racunajUkupniRizikPostotak(osobni: Osobni) {
    if (osobni.inzulin == null) {
      this.ukupniRizikPostotak = (this.ukupniRizik / 28) * 100;
    } else {
      this.ukupniRizikPostotak = (this.ukupniRizik / 36) * 100;
    }
    console.log(this.ukupniRizik);
    console.log(osobni.inzulin);
    return this.ukupniRizikPostotak;
  }
}
