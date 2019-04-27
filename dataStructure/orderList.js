
try{
    let ll = require("./linkedList");
    let writeFile = require("./writeFile");
    let read = require("readline-sync");
    let fs = require("fs");
        
        let fileData = fs.readFileSync('num.txt','UTF-8');
        let arryData = fileData.split(" ");
        let L = new ll.LinkedList;
        L.insertionSort(arryData);
        for(let i = 0; i < arryData.length; i++){
            L.add(arryData[i]);
        }
        L.show();
       
    // console.log("After Swapping Element");
        console.log(arryData);
        let search = read.question("Enter Element that you want to search ");
        if(L.search(search)){
            L.remove(search);
        }
        else
            L.add(search);

        let word = L.getData();
        console.log(word);
        writeFile.writeFile('num.txt', word);
        console.log(" Linked List Element are :\n");
        L.show();
}
catch(err){
    console.log(err);
}

