import { LinkedList, ListNode } from "@linked-lists/index";

export class Queue<T> {
    private queue: LinkedList<T> = new LinkedList();
    enque(item: T): void {
        this.queue.append(item);
    }
    deque(): T | null | undefined {
        return this.queue.removeFirst();
    }

    peek(): T | null | undefined {
        return this.queue.head?.value ?? null;
    }

    getSize(): number {
        return this.queue.getSize();
    }

    isEmpty(): boolean {
        return this.queue.getSize() === 0;
    }

    clear(): void {
        this.queue.removeAll();
    }

    toArray(): T[] {
        return this.queue.getItems();
    }

    contains(cb:(item:T)=>boolean): boolean {
        let curr = this.queue.head;
        while (curr !== null) {
            if(cb(curr.value)) return true;
            curr = curr.next;
        }
        return false;
    }

    forEach(cb: (item: T) => void): void {
        let curr = this.queue.head;
        while (curr !== null) {
            cb(curr.value);
            curr = curr.next;
        }
    }

    toString(): string {
        return '';
    }
    print(): void {
        let values: T[] = [];
        let curr = this.queue.head;
        while (curr !== null) {
            values.push(curr.value);
            curr = curr.next;
        }
        console.log('[' + values.join(' ') + ']');
    }
    size(): number {
        return this.queue.size;
    }
}

