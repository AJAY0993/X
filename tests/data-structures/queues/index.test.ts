import { beforeEach, describe, expect, it, mock } from 'bun:test';
import { Queue } from '@queues/index';

describe("queues",()=>{
    let que : Queue<number>;
    beforeEach(()=>{
        que = new Queue<number>();
    })

    it("que should be empty and size should be 0 atbeginning", ()=>{
        expect(que.getSize()).toBe(0);
        expect(que.isEmpty()).toBe(true);
    })
    it("should enque correctly",()=>{
        que.enque(1);
        que.enque(2);
        que.enque(3);
        expect(que.getSize()).toBe(3);
        expect(que.isEmpty()).toBe(false);
    })

    it("should deque properly", ()=>{
        que.enque(1);
        que.enque(2);
        que.enque(3);
        expect(que.deque()).toBe(1);
        expect(que.deque()).toBe(2);
        expect(que.deque()).toBe(3);
        expect(que.deque()).toBe(null);
        expect(que.getSize()).toBe(0);
        expect(que.isEmpty()).toBe(true);
    })

    it("peek should return first item when que is not empty",()=>{
        que.enque(1);
        que.enque(2);
        que.enque(3);
        que.enque(4);
        que.enque(5);

        expect(que.peek()).toBe(1);
        que.deque();
        expect(que.peek()).toBe(2);
        que.deque();
        expect(que.peek()).toBe(3);
        que.deque();
        expect(que.peek()).toBe(4);
    })

    it("peek should return null when que is empty",()=>{
        expect(que.peek()).toBe(null);
    })

    it("getSize should return correct size of queue and isEmpty should return true if queue is empty else false", ()=>{
        expect(que.getSize()).toBe(0);
        expect(que.isEmpty()).toBe(true);

        que.enque(1);
        que.enque(2);
        que.enque(3);
        que.enque(4);
        que.enque(5);
        expect(que.getSize()).toBe(5);
        expect(que.isEmpty()).toBe(false);

        que.deque();
        expect(que.getSize()).toBe(4);
        expect(que.isEmpty()).toBe(false);

        que.deque();
        expect(que.getSize()).toBe(3);
        expect(que.isEmpty()).toBe(false);

        que.deque();
        expect(que.getSize()).toBe(2);
        expect(que.isEmpty()).toBe(false);

        que.deque();
        expect(que.getSize()).toBe(1);
        expect(que.isEmpty()).toBe(false);

        que.deque();
        expect(que.getSize()).toBe(0);
        expect(que.isEmpty()).toBe(true);
    })

    it("clear should empty the queue",()=>{
        que.enque(1);
        que.enque(2);
        que.enque(3);
        que.enque(4);
        que.enque(5);

        expect(que.getSize()).toBe(5);
        expect(que.isEmpty()).toBe(false);
        que.clear();
        expect(que.getSize()).toBe(0);
        expect(que.isEmpty()).toBe(true);
    })

    it("should convert queue in to array", ()=>{
        que.enque(1);
        que.enque(2);
        que.enque(3);
        que.enque(4);
        que.enque(5);

        expect(que.toArray()).toEqual([1,2,3,4,5]);
    })

    it("should return true if queue is containing specific item using a callback", ()=>{
        que.enque(1);
        que.enque(2);
        que.enque(3);
        que.enque(4);
        que.enque(5); 

        expect(que.contains((item) => item === 3)).toBe(true);
        expect(que.contains((item) => item === 6)).toBe(false);
    })

    it("forEach should call callback on each function", ()=>{
        que.enque(1);
        que.enque(2);
        que.enque(3);
        que.enque(4);
        que.enque(5); 

        console.log = mock(()=> console.log);

        que.forEach((item)=>{
            console.log(item);
        })

        expect(console.log).toBeCalledTimes(5);
    })
})
