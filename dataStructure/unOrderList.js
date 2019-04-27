var list=require('./linkedList');
var filestream=require('fs');
var readline=require('readline-sync');
var writeUtil=require('./writeFile');

try{
function unordered() {
    var string = filestream.readFileSync('abc.txt','UTF-8');
    //console.log(typeof(string))
    var array = string.split(' ');

    var unord = new list.LinkedList;
    for (let i = 0; i < array.length; i++) {
        unord.add(array[i]);
    }
    unord.show();

    var answer = readline.question("Enter the word do you want to search  ");
    if (!isNaN(answer)) {
        console.log("input should be in string form ");
        return;
    }
    else {
        if (unord.search(answer)) {
            unord.remove(answer);
        }
        else {
            unord.add(answer);
        }
    }

    // unord.show();
    var word = unord.getData();
    writeUtil.writeFile('abc.txt', word);
    console.log("Linked list elements are ");
    unord.show();
}
unordered();
}
catch(err){
    console.log(err);
}