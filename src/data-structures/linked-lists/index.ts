export class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
export class LinkedList<T> {
    head: ListNode<T> | null = null;
    tail: ListNode<T> | null = null;
    size = 0;

    append(value: T): void {
        let newNode = new ListNode<T>(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.size++;
    }

    prepend(value: T): void {
        let newNode = new ListNode<T>(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++
    }

    removeFirst(): null | T {
        let node : null | T = null;
        if (this.head !== null) {
            node = this.head.value;
            this.head = this.head.next;
            if (this.head === null) {
                this.tail === null;
            }
            this.size--;
        }
        return node;
    }
    removeLast(): null | T {
        let curr = this.head;
        let node:null | T = null
        if (curr !== null) {
            if (curr.next === null) {
                node = curr.value;
                this.head = null;
                this.tail = null;
            } else {
                while (curr?.next?.next !== null) {
                    curr = curr.next as ListNode<T>;
                }
                node = curr.next.value;
                curr.next = null;
                this.tail = curr;
            }
            this.size--;
        }
        return node;
    }

    remove(fn : (node:ListNode<T>) => boolean): void {
        let curr = this.head;
        let prev: ListNode<T> | null = null;

        while (curr !== null) {
            if (fn(curr)) {
                if (prev === null) {
                    this.head = curr.next;
                    if (this.head === null) {
                        this.tail = null;
                    }
                } else {
                    prev.next = curr.next;
                    if (prev.next === null) {
                        this.tail = prev;
                    }
                }
                this.size--; 
                return;
            }

            prev = curr;
            curr = curr.next;
        }
    }

    removeAll():void{
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }
    isEmpty(): boolean {
        return this.size === 0;
    }

    getItems():T[]{
        let items:T[] = [];
        let curr = this.head;
        while(curr !== null){
            items.push(curr.value);
            curr = curr.next;
        }
        return items;
    }

    print(){
        let values: T[] = [];
        let curr = this.head;
        while (curr !== null) {
            values.push(curr.value);
            curr = curr.next;
        }
        console.log(values.join('->'));
    }
}