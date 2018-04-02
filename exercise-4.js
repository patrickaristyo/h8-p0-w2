var hari= '30';
var bulan= '08';
var tahun= '2018';
var temp = '';

switch(bulan) {
  case "01":
    temp = 'Januari';
    break;
  case "02":
    temp = 'Februari';
    break;
  case "03":
    temp = 'Maret';
    break;
  case "04":
    temp = 'April';
    break;
  case "05":
    temp = 'Mei';
    break;
  case "06":
    temp = 'Juni';
    break;
  case "07":
    temp = 'Juli';
    break;  
  case "08":
    temp = 'Agustus';
    break;
  case "09":
    temp = 'September';
    break;
  case "10":
    temp = 'Oktober';
    break;
  case "11":
    temp = 'November';
    break;
  case "12":
    temp = 'Desember';
    break;
}

console.log(hari+' '+temp+' '+tahun);

