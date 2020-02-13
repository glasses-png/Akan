function output(){
  var day=document.getElementById("day").nodeValue;
  var dd=parseInt(day);
  var month=document.getElementById("month").nodeValue;
  var mm=parseInt(month);
  var year=document.getElementById("year").nodeValue;
  var yy=parseInt(year);
  var cc=(yy-1)/100+1;
  var result=parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
  var boy=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var girl=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  if(document.getElementById("gender").checked){
    var gender='male';
  }
  else{
    var gender='female';
  }
  if (mm<1||mm>12||mm==2&&dd>29){
    alert("INVALID MONTH");
  }
  else if(dd<1||dd>31){
    alert("INVALID DAY");
  }
  else if(Math.ceil(result)==0&&gender==='male');{
    document.getElementById("outcome").innerHTML=
    ("Born on Sunday,your akan name is"+boy[0]);
  }
  else if(Math.ceil(result)==1&&gender==='male');{
    document.getElementById("outcome").innerHTML=
    ("Born on Monday,your akan name is"+boy[1]);
  }
  else if(Math.ceil(result)==2&&gender==='male');{
    document.getElementById("outcome").innerHTML=
    ("Born on Tuesday, your akan name is"+boy[2]);
  }
   else {
    alert("enter your information please");
    }
  else if
}