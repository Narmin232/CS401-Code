class Telebe {
    constructor(ad, soyad, yas) {
      this.ad = ad;
      this.soyad = soyad;
      this.yas = yas;
    }
  }
  
  let telebe1 = new Telebe("Abbasova", "Nermin", 19);
  let telebe2 = new Telebe("Memmedov", "Ahmed", 21);
  let telebe3 = new Telebe("Memmedova", "Leyla", 19);
  
  let telebeler = [telebe1, telebe2, telebe3];
  
  function yasOrtalamasiHesapla(telebeler) {
    let toplamYas = 0;
    for (let telebe of telebeler) {
      toplamYas += telebe.yas;
    }
    let ortalamaYas = toplamYas / telebeler.length;
    return ortalamaYas;
  }
  
  let yasOrtalamasi = yasOrtalamasiHesapla(telebeler);
  console.log("Yaş Ortalaması: " + yasOrtalamasi);
  