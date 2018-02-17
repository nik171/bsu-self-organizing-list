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
        
        if(this.head == null && this.tail == null){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    size() {

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
