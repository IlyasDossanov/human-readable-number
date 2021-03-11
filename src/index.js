module.exports = function toReadable (number) {
    function onlyChars(number){
        number += '';
        let out = '';
            if(number=='1'){
                out = 'one ';
            }
            else if(number=='2'){
                out = 'two ';
            }
            else if(number=='3'){
                out = 'three ';
            }
            else if(number=='4'){
                out = 'four ';
            }
            else if(number=='5'){
                out = 'five ';
            }
            else if(number=='6'){
                out = 'six ';
            }
            else if(number=='7'){
                out = 'seven ';
            }
            else if(number=='8'){
                out = 'eight ';
            }
            else if(number=='9'){
                out = 'nine ';
            }
            return(out);
    }


    
    number+='';
    let redeble = '';
    for(let i = 0; i<number.length;  i++){
        if(number.charAt(i)=='1'){
            redeble += 'one'
        }
        else if(number.charAt(i)=='2'){
            redeble += 'two'
        }
        else if(number.charAt(i)=='3'){
            redeble += 'three'
        }
        else if(number.charAt(i)=='4'){
            redeble += 'four'
        }
        else if(number.charAt(i)=='5'){
            redeble += 'five'
        }
        else if(number.charAt(i)=='6'){
            redeble += 'six'
        }
        else if(number.charAt(i)=='7'){
            redeble += 'seven'
        }
        else if(number.charAt(i)=='8'){
            redeble += 'eight'
        }
        else if(number.charAt(i)=='9'){
            redeble += 'nine'
        }
    }
  
}
