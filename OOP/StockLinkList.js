class Node {
    constructor(data){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        let n = new Node(data);
        if(this.head == null){
            this.head = n;
            this.size++;
        }
        else{
            let curr = this.head;
            while(curr.next != null){
                curr = curr.next;
            }
            size++;
            curr.next = n;
        }
    }
    print(){
        let arr = [];
        let curr = this.head;
        if(this.head == null){
            console.log(" List is Empty ");
            return false;
        }      
        while(curr){
                arr.push(curr)
                curr = curr.next;
        }
        return arr;
    }
    search(str){
        
    }    
}