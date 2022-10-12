
document.getElementById("myName").innerHTML = prompt(' İsim giriniz ');
function zaman() {
  const tarih = new Date();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let saat=tarih.getHours();
  dakika = checkTime(dakika);
  saniye = checkTime(saniye);
  saat=checkTime(saat);
 
  document.getElementById('myClock').innerHTML = saat + " : " + dakika + " : " + saniye ;
  setTimeout(zaman, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}
zaman()
