
class DeckOfCards{
    cards(){
        let util = require('util');
        let suit = ["Clubs","Diamonds", "Hearts", "Spades"];
        let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"];
        let dArray =[];
            // take all the 52 cards in dArray..
            for(let i = 0; i < suit.length; i++){
                for(let j = 0 ; j < rank.length; j++){
                    dArray.push( suit[i] + " " + rank[j]);
                }
            }
            let n = suit.length * rank.length;
            let array = [[],[],[],[]];
            console.log(n);
            // Here we doing Shuffling cards
                for( let i = 0 ; i < n ; i++ ){
                    let ran = parseInt(Math.random() * n );
                    let temp = dArray[i];
                    dArray[i] = dArray[ran];
                    dArray[ran] = temp;
                }
                let x = 0;
            for(let i = 0 ; i < 4; i++){
               // array[i] = [];
                for( let j = 0 ; j < 9 ; j++ ){
                    array[i][j] = dArray[j + x];
                }
                x = x + 9;
            }
           // console.log(array)
            let m = 1;
            for(let i = 0; i < 4; i++ ){
                for(let j = 0; j < 9; j++){
                    console.log("Player " + m+ "--> " +array[i][j] + " ");
                }
                m++;
            }
            

    }
    
}
    DeckOfCards = new DeckOfCards();
    DeckOfCards.cards();