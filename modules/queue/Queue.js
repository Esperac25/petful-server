class _Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(data){
        const node = new _Node(data);

        if(this.first === null){
            this.first = node;
        }
        if(this.last){
            this.last.next = node;
        }
        this.last = node;
    }

    dequeue(){
        if(this.first === null){
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if(node === this.last){
            this.last === null;
        }
        return node.value;
    }

    peek(){
        return this.first.value;
    }

    isEmpty(){
        if(this.first === null){
            return null;
        }
    }

    show(){
        let currNode = this.first;
        while(currNode !== null){
            currNode = currNode.next;
        }
    }
}

const showQ = (queue) => {
    let q = [];
    let currNode = queue.first;

    while(currNode){
        q.push(currNode.value)
        currNode = currNode.next;
    }
    return q;
};

module.exports = { _Node, Queue, showQ };