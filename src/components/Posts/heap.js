class Heap{

    constructor(arr) {
        this.heapify(arr)
        this.length = this.heap.length;
    }

    heapify(arr){
        this.heap = arr
        for(let index = this.parent(arr.length - 1); index >= 0; index--) this.siftDown(index)
    }

    parent(index){
        if(index === 0) {
            console.log("Root element has no parent.")
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }

    leftChild(index){
        return 2 * index + 1 >= this.length ? undefined : 2 * index + 1;
    }

    rightChild(index){
        return 2 * index + 2 >= this.length ? undefined : 2 * index + 2;
    }

    add(val){
        this.heap.push(val);
        this.siftUp(this.length - 1);
    }

    get(index){
        return this.heap[index]
    }

    remove(){
        if(this.length === 0) return undefined;
        const max = this.heap[0];
        [this.heap[0], this.heap[this.length - 1]] = [this.heap[this.heap - 1], this.heap[0]]
        this.heap.pop()
        this.siftDown(0)
        return max;
    }

    siftUp(index){
        while(index > 0 && this.heap[index] < this.heap[this.parent(index)]){
            [this.heap[index], this.heap[this.parent(index)]] = [this.heap[this.parent(index)], this.heap[index]]
            index = this.parent(index)
        }
    }

    siftDown(index){
        while(this.leftChild(index) < this.length){
            let smaller = this.heap[this.leftChild(index)] < this.heap[this.rightChild(index)] ? this.leftChild(index): this.rightChild(index)
            if(this.heap[smaller] >= this.heap[index]) break;
            else [this.heap[smaller], this.heap[index]] = [this.heap[index], this.heap[smaller]]
        }
    }

    replace(val){
        this.heap[0] = val;
        this.siftDown(0);
    }



}

const h = new Heap([2,1,3])
console.log(h)
