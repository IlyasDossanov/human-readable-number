module.exports = function toReadable (number) {
	number +='';
	let outputStr =''
    let myMap = new Map([['0', ''], ['1','one'], ['2','two'], ['3', 'three'], ['4', 'four'], 
    ['5', 'five'], ['6', 'six'], ['7', 'seven'], ['8', 'eight'], ['9', 'nine'], ['10', 'ten'],
    ['11', 'eleven'], ['12', 'twelve'], ['13', 'thirteen'], ['14', 'fourteen'], ['15', 'fifteen'], ['16', 'sixteen'],
    ['17', 'seventeen'], ['18', 'eighteen'], ['19', 'nineteen'], ['20', 'twenty'],['30', 'thirty'], ['40', 'forty'], ['50', 'fifty'],
    ['60', 'sixty'], ['70', 'seventy'], ['80', 'eighty'], ['90', 'ninety'], ['100', 'one hundred'], ['200', 'two hundred'],
    ['300', 'three hundred'], ['400', 'four hundred'], ['500', 'five hundred'], ['600', 'six hundred'], ['700', 'seven hundred'], ['800', 'eight hundred'], 
    ['900', 'nine hundred']]);
         
/*логика такая: проверяю больше ли определенного 
порядка число(пример больше ли 10) и в соответствии ему идем по циклу*/
    if(number == 0){
        return('zero');
    }
    else if(number == 10){
        return('ten');
    }
    else if(number < 10){
        return(myMap.get(number));
    }
    /////////////////////////////// десятки
    else if(number > 10 && number<100){
	  getDecimal(number);
    }
   	//////////////////////////////сотни
   else if(number > 100 && number<1000){
    	getHundrets(number);
    }

function getDecimal(number){
    	if(number%10 == 0){
    		outputStr = myMap.get(number);
    	}
    	else if(number > 10 && number < 20){
    		outputStr = myMap.get(number)
    	}
    	else{
    		outputStr = myMap.get((number-(number%10))+'')+ ' '+ myMap.get((number%10)+'');
    	}
}
function getHundrets(number){
	if(number%100 == 0){
    	outputStr = myMap.get(number)-number.charAt(number.length);
    }
    if(number%100 < 10){
    	outputStr = myMap.get(number-number.charAt(2)+"")+ " "+ myMap.get(number.charAt(2)+"");
    }
    else if (number%100 > 10 && number%100 < 20) {
    	outputStr =  myMap.get((number-(number%100))+'')+" "+ myMap.get(number.charAt(1)+number.charAt(2))
    }
    else if(number%10 == 0){
    	outputStr = myMap.get((number-(number%100))+'')+ ' '+ myMap.get((number%100)-(number%10)+'')
    	}
    else{
    	outputStr = myMap.get((number-(number%100))+'')+ ' '+ myMap.get((number%100)-(number%10)+'')+ ' '+ myMap.get((number%10)+'');
    	}
}

    return(outputStr)
      
}