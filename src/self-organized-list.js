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
        if(this.head == null){
            return length;
        }
        else{
            var curr = this.head;
            while(curr != null){
                curr = curr.next;
                length++;
            }
        }
        return length;
    }

    at(index) {

    }

    findNode(data) {

    }

    toArray() {

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
