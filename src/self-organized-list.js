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
        var pos = this.size();
        if(head == null || index < 0 || index > size - 1){
            return null;
        }
        else{
            var curr = this.head;
            pos = 0;
            while(pos != index){
                curr = curr.next;
                pos++;
            }
        }
        return curr.data;
    }

    findNode(data) {
        var curr = this.head;
        while(curr.data != data && curr != null){
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
        if(index == 0){
            if(this.head.next){
                this.head = this.head.next;
                this.head.prev = null;
            }
            else{
                this.head = this.tail = null;
            }
            return;
        }
        if(index == this.size()){
            this.tail = this.tail.prev;
            this.tail.next = null;
            return;
        }
        var curr = this.head;
        var pos = 0;
        while(pos != index){
            curr = curr.next;
            pos++;
        }
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        curr = null;
    }

    moveToFront(node) {
        var curr = this.head;
        while(curr != node && curr != null){
            curr = curr.next;
        }
        if(curr == null){
            return;
        }
        if(curr == this.tail && this.size() > 1){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.head.prev = curr;
            curr.next = this.head;
            this.head = curr;
            return;
        }
        else if(curr != this.head && curr != this.tail && this.size > 1){
            var temp = curr;
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            this.head.prev = curr;
            curr.next = this.head;
            this.head = curr;
            return;
        }
        return;
    }

    reorganize(data) {
        var curr = this.head;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
