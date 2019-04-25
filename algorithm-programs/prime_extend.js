let count = 0;
var arr = [];
let k = 0;
let l = [];
let c = [];
let o = 0;
let p = 0;
for(let i = 2; i < 1000; i++){
    if(i == 2){
        console.log(i);
   }
   else{
        for(let j = 2; j <= i/2; j++){
                if( i % j == 0 )
                    count++;
        }            
        if(count == 0){
            arr[k] = i; 
            k++;
        }
        else 
            count = 0;  
    }         
}
// console.log(arr.length);
// for( let i = 0; i <arr.length; i++ ){
//     console.log(arr[i]);
// }
    
    for(let i = 0; i< arr.length; i++){
        for(let j = i + 1; j<= arr.length; j++){
            c = arr[i];
            l = arr[j];                       
                for(let m = 0; m < c.length - 1; k++){
                    for(let n = 0; n <= l.length; l++){
                        if(c[m] == l[n]){
                            o++;
                        }
                    }
                }
                for(let m = 0; m < c.length; k++){
                    for(let n = 0; n <= l.length; l++){
                        if(l[m] == c[n]){
                            p++;
                        }
                    }
                }
                if( o == p){
                    console.log(c +" " + l);
                }
            
        }
    } 