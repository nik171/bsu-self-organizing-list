class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        var node = new Node(data);
        
        if(this.head != null){
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            
        }
        else{
            this.head = node;
            this.tail = node;
        }
    }

    size() {
        var length = 0;
        var curr = this.head;
        while(curr != null){
            curr = curr.next;
            length++;
        }
        return length;
    }

    at(index) {
        var curr = this.head;
        var pos = 0;
        while(pos < index){
            curr = curr.next;
            pos++;
        }
        return curr.data;
    }

    findNode(data) {
        var curr = this.head;
        while(curr.data != data){
            curr = curr.next;
        }
        return curr;
    }

    toArray() {
        var n = this.size();
        var pos = 0;
        var arr = new Array(n);
        var curr = this.head;
        while(pos < n){
            arr[pos] = curr.data;
            curr = curr.next;
            pos++;
        }
        return arr;
    }

    removeAt(index) {

    }

    moveToFront(node) {

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
