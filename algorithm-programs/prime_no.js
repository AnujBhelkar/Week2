let count = 0;
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
            console.log(i);
        
        }
        else 
            count = 0;  
    }  

        
}
