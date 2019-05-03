
class cou_ran{
    static staticMethod(num){
        return Math.floor(Math.random() * num);
    }        
}

var method = {
    replace_str: function(data,count){  
        console.log(count);
        if( count < 3 ){
            console.log("Name should be greater than 3");
        }
        else{
            let str = "Hello <<username>>,How are you?";
            let str1 = str.replace('<<username>>',data);
            console.log(str1);
        }
    },

    coin: function(num){
        let possible_head = 0 ;
        let possible_tail = 0 ;
        if( 0 < num){
            for( let i = 0 ; i < num ; i++ ){
        
                if(Math.random() < 0.5)
                    possible_head++;
                else
                    possible_tail++;

            }
                console.log("Percentage of Head :- "+ ((possible_head / num) * 100));
                console.log("Percentage of Tail :- "+ ((possible_tail / num) * 100));

        }else{
            console.log("Enter Positive Value");
        }
    },

    leap_year: function(){
        var readline =require("readline-sync");
        let year = readline.question("Enter a year");
        let count = year.length;
        if(count == 4 && year > 0){
            if( year % 4 == 0){
                if( year % 100 == 0){
                    if( year % 400 == 0 ){
                        return 1;
                    }else{
                        return 0;
                    }
                }else{
                    return 1;
                }   
            }
            else{
                return 0;
            }
        }
    },

    power_of_2(num){
        if( num >= 0 ){
            if( num < 31){
                for(let i = 0; i <= num; i++){
                    console.log(Math.pow(2,i));
                }
            }
            else{
                console.log("Overflow or Enter Value Less than 31");
            }
        }
        else{
            console.log("Underflow or Enter unsigned value");
        } 
    },

    harmonic_num(num){

        if( num != 0 ){
            for( let i = 1; i <= num; i++){
                let op = 1 / i;
                console.log( op.toFixed(2) );
            }
        }
        else{
            console.log("Number not divisible by 0");
        }

    },
    found_prime_factor(num){
        let factor = [];
        let k = 0;
        let count = 0;
            for(let i = 2; i <= num/2; i++){
                if( num % i == 0){
                    factor[k] = i;
                    k++;
                }
            }
           for(let i = 0; i < factor.length; i++){
               if(factor[i] == 2){
                    console.log(factor[i]);
               }
               else{
                    for(let j = 2; j <= factor[i]/2; j++){
                            if( factor[i] % j == 0 )
                                count++;
                    }            
                    if(count == 0)
                        console.log(factor[i]);
                    else 
                        count = 0;  
                }  
                
           }

    }, 
    gambler(stake,goal,times){
        let win = 0;
        let loss = 0;
            for(let i = 0; i < times; i++ ){
                   if(stake > 0 && stake < goal){
                       if(Math.random() < 0.5){
                        win++;
                        stake++;
                       }
                       else{
                        loss++;
                        stake--;
                       }
                   }    
            }
            console.log(win);
            console.log(loss);
            let total = loss + win;
            console.log("Win Percentage :- " + ((win / total) * 100) );
            console.log("loss Percentage :- " + ((loss / total) * 100) );
    },

    coupon_num(num){
        let arr = [];
        let k;
        let count = 0; 
        for(let i = 0; i < num; i++){
            k = cou_ran.staticMethod(num);
            arr[i] = k;
        }
        for(let i = 0; i < arr.length ; i++){ 
            for(let j = i + 1; j <= arr.length; j++){       
                if(arr[i] == arr[j] ){
                    count++; 
                }    
            }
            if( count == 0 )
                console.log(arr[i]);
            count = 0;
        }

    }, 
    array_2D(arr){
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].join(" "));
        }
    },

    sum_add_0(arr){
        let temp = 0 ;
        let con = [];
        for(let i = 0; i < arr.length - 2; i++){
            for(let j = i + 1; j < arr.length - 1; j++){
                for(let k = j + 1; k < arr.length; k++){
                    temp = parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[k]);
                    if(temp == 0){
                         console.log(arr[i] +" " + arr[j] + " " + arr[k]);
                    }
                }
                temp = 0;
            }
        }
    },
    distance(x,y){
        let dis = Math.sqrt(Math.pow(x,x) + Math.pow(y,y));
        console.log("Euclidean distance from the point (x, y) to the origin (0, 0) is " + dis.toFixed(2) );

    },
    
    stop_watch(){
        const readline = require("readline-sync");
        let startTime = readline.question(" Enter 0 for start stopwatch ");
        
        let start = this.watch();
        console.log(start);
        let endTime = readline.question(" Enter 1 for stop stopwatch ");
       
        let stop = this.watch();
        console.log(stop);
        console.log(stop - start);
    },
    watch(){
        let date = new Date();
        return date.getSeconds();
    },
    quadratic(a,b,c){
        let delta = (b * b ) - (4 * a *c);
        console.log(delta);
        let sqrt = Math.sqrt(delta);
        console.log(sqrt);
        let root1 = ( -b + sqrt ) / (2 * a);
        let root2 = ( -b - sqrt ) / (2 * a);
        console.log( "roots of x is " + root1 + " " + root2);
    },
    windChill(t,v){
        if( t < 50 && v < 120 && v > 3){
            let chill = 35.74 + ( 0.6215 * t ) + ( ( 0.4275 * t ) - 35.75 ) * Math.pow( v , 0.16);
            console.log(chill);
        }
        else{
            console.log("Values not in range");
        }
    },

  permutation(string, str, first, last) {
    if (first == last) {
      console.log(str);
      string = string + str;
    }
    else {
      for (let index = first; index <= last; index++) {
        //call swapstring method swap the characters 
        str = this.swapString(str, first, index);
        // recursion method 
        string = this.permutation(string, str, first + 1, last);
        str = this.swapString(str, first, index);
      }
    }
    return string;
  },
  // swap method for swaping the string character
  swapString(str, first, last) {
    var as = '';
    //empty array
    var ch = [];
    //split string into the character
    ch = str.split('');
    // temporary variable
    var temp = ch[first];
    ch[first] = ch[last];
    ch[last] = temp;
    for (let index = 0; index < str.length; index++) {
      as = as + ch[index];
    }
    return as;
  }
};
    module.exports = method;