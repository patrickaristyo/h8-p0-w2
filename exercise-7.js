var row = 1;
while(row <= 5){
  console.log("*");
  row++;
}


var row = 5;
var row2 = 5;
var temp = '';

while(row >= 1){
  while(row2 >= 1){
    temp = temp + '*'
    row2--
  }
  console.log(temp);
  temp = '';
  row--;
  row2 = 5;
}



var baris = 5;
var kolom = 5;
var temp = '';

for(var i = 0;i<baris;i++){
  for(var j = 0;j<baris;j++){
    temp = temp+"*";
  }
  kolom--;
  console.log(temp);
  temp = ' ';
}
