import { LinkedList } from '@linked-lists/index';
import { beforeEach, describe, expect, it, mock } from 'bun:test';


describe("linked list", () => {
    let linkList: LinkedList<number>;

    beforeEach(() => {
        linkList = new LinkedList<number>();
    })

    it("should start with size 0 and empty", () => {
        expect(linkList.getSize()).toBe(0);
        expect(linkList.isEmpty()).toBe(true);
    })

    it("Tests insertion at end", () => {
        linkList.append(1);
        linkList.append(1);
        linkList.append(3);
        expect(linkList.getSize()).toBe(3);
        expect(linkList.isEmpty()).toBe(false);
    })

    it("Tests insertion at beginning", () => {
        linkList.prepend(3);
        linkList.prepend(2);
        linkList.prepend(1);
        expect(linkList.getSize()).toBe(3);
        expect(linkList.isEmpty()).toBe(false);
    })

    it("should return items", () => {
        linkList.append(1);
        linkList.append(2);
        linkList.append(3);
        expect(linkList.getItems()).toEqual([1, 2, 3]);
    })

    it("should return empty array for an empty list", () => {
        expect(linkList.getItems()).toEqual([]);
    })

    it("should remove first node", () => {
        linkList.append(1);
        linkList.append(2);
        linkList.append(3);

        linkList.removeFirst();
        expect(linkList.getItems()).toEqual([2, 3]);
        expect(linkList.getSize()).toEqual(2);
    })

    it("should handle removeFirst operation for an empty list", () => {
        linkList.removeFirst();
        expect(linkList.getSize()).toBe(0);
        expect(linkList.isEmpty()).toBe(true);
        expect(linkList.getItems()).toEqual([]);
    })

    it("should remove last node", () => {
        linkList.append(1);
        linkList.append(2);
        linkList.append(3);

        linkList.removeLast();
        expect(linkList.getItems()).toEqual([1, 2]);
        expect(linkList.getSize()).toEqual(2);
    })

    it("should handle removeLast operation for an empty list", () => {
        linkList.removeLast();
        expect(linkList.getSize()).toBe(0);
        expect(linkList.isEmpty()).toBe(true);
        expect(linkList.getItems()).toEqual([]);
    })

    it("should remove any element from middle of list", () => {
        linkList.append(1);
        linkList.append(2);
        linkList.append(3);

        linkList.remove((node) => node.value === 2);
        expect(linkList.getItems()).toEqual([1, 3]);
        expect(linkList.getSize()).toBe(2);
        expect(linkList.isEmpty()).toBe(false);
    })

    it("should remove a specific item from the list using a callback", () => {
        linkList.append(1);
        linkList.append(2);
        linkList.append(3);

        linkList.remove((node) => node.value === 2);
        expect(linkList.getItems()).toEqual([1, 3]);
        expect(linkList.getSize()).toBe(2);
        expect(linkList.isEmpty()).toBe(false);
    })

    it("should print the list correctly", ()=>{
        linkList.append(1);
        linkList.append(2);
        linkList.append(3);

        console.log = mock(()=> console.log);

        linkList.print();
        expect(console.log).toHaveBeenCalledWith("1->2->3")
    })
})