const read = require("readline-sync");
var method = {
    anagram(str1,str2){
        let k = 0;
        let l = 0;
        let count = 0;
        if(str1.length != str2.length){
            console.log("Insert same length string ");
        }
        else{
            for( let i = 0; i < str1.length; i++){
                for( let j = 0; j < str2.length; j++){
                    if( str1[i] != str2[j]){
                        continue;
                    }
                    else{  
                        count++;
                            if(count == 1)
                                k++;
                                
                    }
                } count = 0;
            }
            for( let i = 0; i < str1.length; i++){
                for( let j = 0; j < str2.length; j++){
                    if( str2[i] != str1[j]){
                        continue;
                    }
                    else{  
                        count++;
                        if(count == 1)
                                l++;
                                
                    }
                    
                }count = 0;
            }
            if( k == l){
                if( k == str1.length)
                console.log("The Two string are anagram ");
                else
                console.log("The Two string are not anagram ");
            }
            else
            console.log("The Two string are not anagram ");
        }
    },
    bubbleSort(){
        let nOE = read.question("Enter Number OF Elements ");
        let elements = [];
            for(let i = 0; i < nOE; i++){
                elements[i]=read.question();
            }
            for(let j = 0; j < nOE ; j++ ){
                for(let i = 0; i < nOE - 1 ; i++ ){            
                    if(elements[i] < elements[i + 1])
                        continue;
                    else{
                        let temp = elements[i + 1];
                        elements[i + 1] = elements[i];
                        elements[i] = temp;
                    }                 
                }
            }    
        for(let i = 0; i < nOE; i++){
            console.log(elements[i]);
        }
    },
    insertionSort(str){
        
        let temp;
            
            for(let i = 1; i < str.length; i++){
                for(let j = i - 1; j < i && j >= 0; j--){
                    if(str[j] > str[j + 1]){
                        temp1 = str[j];
                        str[j] = str[j + 1];
                        str[j + 1] = temp1;
                    }                   
                }
            }
            for(let i = 0; i < str.length; i++){
                console.log(str[i]);
            }
    },
    vendMachine(amount,notes){
        let c = 0;
        let note = 0;
        for(let i = 0; i < notes.length; i++){
            if(amount / notes[i] >= 1){
                c = Math.floor(amount / notes[i]);
                note += c;
                console.log(notes[i] + " notes are " + c);
                amount %= notes[i];

            }
        }
        console.log("Total notes are " + note );
    },
    dayOfWeek(d,m,y){
        let y0 = y - Math.floor((14 - m)/12);
        let x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 /400);
        let m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        let d0 = (d + x + Math.floor((31 * m0)/12)) % 7;
        console.log(d0);
    },
    celsiusToF(){
        let temp = read.question(" Enter the Temperature in celsius ");
        let fahr = (temp * (9 / 5)) + 32
            console.log(fahr);
    },
    fahrenheitToC(){
        let temp = read.question(" Enter the Temperature in Fahrenheit ");
        let celsius = (temp - 32) * (5 / 9);
            console.log(celsius);
    }

}
module.exports = method;