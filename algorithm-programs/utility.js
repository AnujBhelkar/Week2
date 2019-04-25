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
    },

     /*********************************Monthly Payment*********************************************/
    /* PURPOSE  Reads in three command-line arguments P, Y, and R and calculates the monthly payments you would have to make over Y years to pay off a P principal loan amount at R per cent interest compounded monthly 
   * */
    monthlyPay(Y, P, R){
        let n = 12 * Y;
        let r = (R / (12 * 100));
        let d = 1 - ((1 + r) **(-n))
        let payment = (P * r) / d;
        console.log("Monthly payment is :- " +payment);      
    },

    /*********************************square root*********************************************/
  /**
   * PURPOSE  Compute the square root of a nonnegative number c given in the input using Newton's method.
   * @param Print the square root of non negative number
   * */
    squrt(c){
        let t = c;
        let epsilon = 1e-15;
        while(Math.abs(t - (c / t)) > (epsilon * t)){
            t = ( c / t + t)/ 2.0;
        } 
        //print estimated square root of c
        console.log("Estimated Square Root is :- " + t);
    },
    /*********************************square root*********************************************/
  /**
   * PURPOSE  Compute the binary representation of n.
   * */
    binary(decimal){
        let arr = [];
        let i = 0;
        let c =decimal;
        while( decimal > 0){
            arr[i] = Math.floor(decimal % 2);
            decimal = Math.floor(decimal / 2);
            i++;  
        }
        let len = arr.length - 1;
        let arry =[];
        for(let j = 0 ; j < arr.length; j++ ){
            arry[j] = arr[len];
            len--;
        }
        console.log(" Binary conversion of "+c+" is " + arry.join(""));
    },

    intAsInput(decimal){
        let arr = [];
        let i = 0;
        let c =decimal;
        while( decimal > 0){
            arr[i] = Math.floor(decimal % 2);
            decimal = Math.floor(decimal / 2);
            i++;  
        }       
        if(arr.length < 8){
            for( let i = 0; i < 8; i++){
                if(arr[i] == null){
                    arr[i] = 0;
                }
            }
        }
        let len = arr.length - 1;
        let arry =[];
        for(let j = 0 ; j < arr.length; j++ ){
            arry[j] = arr[len];
            len--;
        }
        for(let k = 0; k < 4; k++){
            let temp = arry[k];
            arry[k] = arry[4 + k];
            arry[4 + k] = temp;
        }
        let dec = 0;
        let k = 0;
        for(let j = arry.length - 1; j >= 0  ; j--){                
            if(arry[k] == 1){         
                dec = dec + Math.floor(Math.pow(2,j));  
            }
            k++;
        }      
        console.log(dec);
    }

}
module.exports = method;