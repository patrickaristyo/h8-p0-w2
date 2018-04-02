var loop = 2;
while(loop <= 20) {
  console.log(loop + ' - I love coding');
  loop = loop + 2;
}

var loop = 20;
while(loop >= 0) {
  console.log(loop + ' - I will become fullstack developer')
  loop = loop - 2;
}


var loop = 1;
for(loop = 1; loop <=20; loop++) {
  console.log(loop + ' - I love coding');
}
  
var loop = 20;
for(loop = 20; loop >=1; loop--) {
  console.log(loop + ' - I will become fullstack developer');
}


var i = 1;

while(i <= 100){
  if((i % 2) == 0){
    var temp = 'genap';
  } else {
    var temp = 'ganjil';
  }
  
  console.log('Nomor: '+i+', '+temp);
  i++;
}

var i = 1;

while(i <= 100){
  if((i % 3) == 0){
    var temp = 'Kelipatan 3';
  } else {
    var temp = ' ';
  }
  
  console.log('Nomor: '+i+', '+temp);
  i++;
}


var i = 1;

while(i <= 100){
  if((i % 6) == 0){
    var temp = 'Kelipatan 6';
  } else {
    var temp = ' ';
  }
  
  console.log('Nomor: '+i+', '+temp);
  i++;
}

var i = 1;

while(i <= 100){
  if((i % 10) == 0){
    var temp = 'Kelipatan 10';
  } else {
    var temp = ' ';
  }
  
  console.log('Nomor: '+i+', '+temp);
  i++;
}
