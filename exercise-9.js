function shoutOut(){
  var value = 'Hello function';
  return value;
}

console.log(shoutOut());


function hasilPerkalian(num1,num2){
  return num1 * num2;
}

console.log(hasilPerkalian(5,6));


function fullSentence(name,age,address,hobby){
  return name+' '+age+' '+address+' '+hobby;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

console.log(fullSentence(name,age,address,hobby))
