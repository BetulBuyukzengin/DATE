
document.getElementById("myName").innerHTML= prompt(' İsim giriniz ');
function zaman(){
    const tarih=new Date();
    let saat=tarih.getHours();
    let dakika=tarih.getMinutes();
    let saniye=tarih.getSeconds();
    let gun=tarih.getDay();
    let ay=tarih.getMonth();
    let yil=tarih.getFullYear();
    dakika=checkTime(dakika);
    saniye=checkTime(saniye);
    saat=checkTime(saat);
    yil=checkTime(yil);
    gun=checkTime(gun);
    ay=checkTime(ay);
    document.getElementById('myClock').innerHTML =  saat + "  :  " + dakika + "  :  " + saniye + "  :  " + gun + "  :  "+
     ay+"  :  "+yil ;
    setTimeout(zaman, 1000);}

function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
     zaman()
    