var std = ('ali')
var fthname=('rizwan')
var sub1=('12')
var sub2=('10')
var sub3=('19')
var obtained=parseInt(sub1)+parseInt(sub2)+parseInt(sub3)
var per=(obtained*100)/60
var percantage = per.toFixed(0)



document.write(std+fthname+'<br>'+obtained+'<br>'+percantage+'%'+'<br>')

if(percantage<50){

    document.write('you are fail')
    
    
    }

    else{


        document.write('you are pass')
    }