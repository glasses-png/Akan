function output(){
  var day=document.getElementById("day").nodeValue;
  var dd=parseInt(day);
  var month=document.getElementById("month").nodeValue;
  var mm=parseInt(month);
  var year=document.getElementById("year").nodeValue;
  var yy=parseInt(year);
  var cc=(yy-1)/100+1;
  var result=parseInt(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
  var boy=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var girl=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
}