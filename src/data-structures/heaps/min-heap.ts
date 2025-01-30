export class MinHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }
    
    get length(){
        return this.heap.length;
    }

    add(value: number) {
        this.heap.push(value);
        this.heapifyUp();
    }
    remove() : number | undefined{
        if(this.heap.length === 0) return undefined;
        else if(this.heap.length === 1) return this.heap.pop();
        let val = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        this.heapifyDown()
        return val;
    }
    heapifyUp() {
        let ind = this.heap.length - 1;
        while(this.hasParent(ind) && this.heap[ind] < this.getParent(ind)){
            this.swap(ind, this.getParentIndex(ind));
            ind = this.getParentIndex(ind);
        }
    }
    heapifyDown() {

    }
    hasLeftChild(idx: number): boolean {
        return idx < this.heap.length;
    }
    hasRightChild(idx: number): boolean {
        return idx < this.heap.length;
    }
    getLeftChildIndex(idx:number): number{
        return idx * 2 + 1;
    }
    getRightChildIndex(idx:number): number {
        return idx * 2;
    }
    getLeftChild(idx:number):number {
        return this.heap[this.getLeftChildIndex(idx)] as number;
    }
    getRightChild(idx:number):number{
        return this.heap[(this.getLeftChildIndex(idx))];
    }
    hasParent(idx:number):boolean {
        return this.getParentIndex(idx) >= 0; 
    }
    getParentIndex(idx:number) :number {
        return Math.floor((idx - 1) / 2);
    }
    getParent(idx:number) : number{
        return this.heap[this.getParentIndex(idx)];
    }
    swap(i:number, j:number):void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
}
