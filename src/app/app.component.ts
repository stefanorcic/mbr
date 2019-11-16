import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maticni broj - Stefan Keler';

  public pokraine = [
    "Stranci bez državljanstva bivše SFRJ ili njenih naslednica:",
    "Bosna i Hercegovina:",
    "Crna Gora:",
    "Hrvatska:",
    "Makedonija:",
    "Slovenija:",
    "",
    "Centralna Srbija:",
    "Autonomna Pokrajina Vojvodina:",
    "Autonomna Pokrajina Kosovo i Metohija:"
  ]

  public regioni = [
    "",
    "stranci u BiH",
    "stranci u Crnoj Gori",
    "stranci u Hrvatskoj",
    "stranci u Makedoniji",
    "stranci u Sloveniji",
    "",
    "stranci u Srbiji (bez pokrajina)",
    "stranci u Vojvodini",
    "stranci na Kosovu i Metohiji",
    "Banja Luka",
    "Bihać",
    "Doboj",
    "Goražde",
    "Livno",
    "Mostar",
    "Prijedor",
    "Sarajevo",
    "Tuzla",
    "Zenica",
    "",
    "Podgorica",
    "",
    "",
    "",
    "",
    "Nikšić",
    "",
    "",
    "Pljevlja",
    "Osijek, Slavonija region",
    "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region",
    "Varaždin, Međimurje region",
    "Zagreb",
    "Karlovac",
    "Gospić, Lika region",
    "Rijeka, Pula, Istra and Primorje region",
    "Sisak, Banovina region",
    "Split, Zadar, Dubrovnik, Dalmacija region",
    "ostalo",
    "Bitola",
    "Kumanovo",
    "Ohrid",
    "Prilep",
    "Skopje",
    "Strumica",
    "Tetovo",
    "Veles",
    "Štip",
    "Slovenija",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Beograd region",
    "Šumadija",
    "Niš region",
    "Južna Morava",
    "Zaječar",
    "Podunavlje",
    "Podrinje i Kolubara",
    "Kraljevo region",
    "Užice region",
    "Novi Sad region",
    "Sombor region",
    "Subotica region",
    "",
    "",
    "Zrenjanin region",
    "Pančevo region",
    "Kikinda region",
    "Ruma region",
    "Sremska Mitrovica region",
    "",
    "Priština region",
    "Kosovska Mitrovica region",
    "Peć region",
    "Đakovica region",
    "Prizren region",
    "Kosovsko Pomoravski okrug",
    "",
    "",
    "",
    ""
  ]

  public mbr = null;
  public ime = null;
  public prezime = null;
  public poruka = "";

  public valid = false;

  public pokraina = "";
  public region = "";
  public pol = "";

  retartujStanje(){
    this.pokraina = "";
    this.region = "";
    this.pol = "";
    this.poruka = "";
    this.valid = false;
  }
  check(){
    this.retartujStanje();

    console.log(this.mbr);
    if(this.mbr.length != 13){
      this.poruka = "Neispravno unet maticni broj";
    }else{
      this.poruka = "";
      var dd = this.mbr.substring(0,2);
      var mm = this.mbr.substring(2,4);
      var ggg = this.mbr.substring(4,7);
      var rr = this.mbr.substring(7,9);
      var bbb = this.mbr.substring(9,12);
      var k = this.mbr.substring(12,13);

      console.log("dd " + dd);
      console.log("mm " + mm);
      console.log("ggg " + ggg);
      console.log("rr " + rr);
      console.log("bbb " + bbb);
      console.log("k " + k);
      var godina;
      if(ggg >= 0 && ggg <= 799)
        godina = "2" + ggg;
      else
        godina = "1" + ggg;

      this.poruka = "Datum rodjenje: " + dd + "." + mm + "." + godina + ".";

      var s = this.mbr.split('');

      var l = 11 - ((7*(parseInt(s[0])+parseInt(s[6])) + 6*(parseInt(s[1])+parseInt(s[7])) +
                     5*(parseInt(s[2])+parseInt(s[8])) + 4*(parseInt(s[3])+parseInt(s[9])) +
                     3*(parseInt(s[4])+parseInt(s[10])) + 2*(parseInt(s[5])+parseInt(s[11]))) % 11);
      if(l>9)
        l = 0;
      console.log("L " + l);

      if(k != l){
        this.poruka = "Maticni broj nije validan"
      }else{
        var d = new Date(godina+"-" + mm + "-" +dd);

        if(d.getDay()){
          this.poruka = "Datum rodjenja: " + dd + "." + mm + "." + godina + ".";
          this.pokraina = this.pokraine[Math.floor(parseInt(rr)/10)];
          if(this.regioni[parseInt(rr)]){
            this.region = "Region: " + this.regioni[parseInt(rr)];
            if(bbb >499){
              this.pol = "Pol: zenski, rodjena: " + (parseInt(bbb) - 499) + ". u tom danu.";
            }else{
              this.pol = "Pol: muski, rodjen: " + (parseInt(bbb) + 1) + ". u tom danu";  
            } 
            this.valid = true;
          }
          else{
            this.poruka = "Maticni broj nije validan (region nije u upotrebi)";
          }
          
        }else{
          this.poruka = "Maticni broj nije validan (datum nije ispravan)";
        }
      } 
    }
  }
}
