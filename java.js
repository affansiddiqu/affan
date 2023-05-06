var std = prompt ('enter name');
var sub1 = prompt ('enter marks1');
var sub2= prompt ('enter marks2');
var sub3 = prompt ('enter marks3');
var obtained = parseInt (sub1) + parseInt (sub2) + parseInt (sub3);
var per = (obtained*100) / 300;
var percantage = per.toFixed (0);

document.write('Dear'+std+'<br> your marks'+obtained+'<br> your percantage'+percantage+'%'+'<br>');
document.write(alert(percantage));

if(percantage<50){

    document.write('you are pass');
}

else{

    document.write('you are fail');
}