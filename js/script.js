var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female");
var resultNew = document.getElementById("submit");
var hasil = document.getElementById("result");
var comment = document.getElementById("comment");
var angkaHasil = document.getElementById("resultNumber")

resultNew.onclick = function() {
  if(age.value=='' || height.value=='' || weight.value=='' ||(male.checked==true && female.checked==true)){
    hasil.style.display ="none";
  }else if(age.value=='' || height.value=='' || weight.value=='' ||(male.checked==false && female.checked==false)){
    hasil.style.display ="block";
  }
}

var comment = '';
if(bmi<18.5){
  result = 'Kurus';
} else if(18.5<=bmi<=24.9){
  result = 'healthy';
} else if(25<=bmi&&bmi<=29.9){
  result = 'Overweight';
} else if(30<=bmi&&bmi<=34.9){
  result = 'Obese';
} else if(35<=bmi){
  result = 'Sangat obesitas';
}