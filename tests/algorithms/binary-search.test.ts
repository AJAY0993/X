import { describe, it, expect } from 'bun:test';
import { binarySearch } from 'src/algorithms/searching/binary-search';

describe("binary search", () => {
    it("Tests binary search on a sorted array with a target value that exists in the array.", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
    })
    it("Test binary search on a sorted array with a target value smaller than the smallest element in the array.", () => {
        expect(binarySearch([10, 20, 30, 40, 50], 5)).toBe(-1);
    })
    it("Test binary search on a sorted array with a target value larger than the largest element in the array.", () => {
        expect(binarySearch([10, 20, 30, 40, 50], 60)).toBe(-1);
    })
    it("Test binary search on a sorted array where the target is the first element", () => {
        expect(binarySearch([10, 20, 30, 40, 50], 10)).toBe(0);
    })
    it("Test binary search on a sorted array where the target is the last element", () => {
        expect(binarySearch([10, 20, 30, 40, 50], 50)).toBe(4);
    })
    it("Test binary search on a sorted array where the target is in the middle of the array.", () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    })
    it("Test binary search on an empty array", () => {
        expect(binarySearch([], 3)).toBe(-1);
    })
    it("Test binary search on a sorted array with only one element where the target is present.", () => {
        expect(binarySearch([2], 2)).toBe(0);
    })
    it("Test binary search on a sorted array with only one element where the target is not present.", () => {
        expect(binarySearch([3], 4)).toBe(-1);
    })
    it("Test binary search on a sorted array with negative numbers.", () => {
        expect(binarySearch([-10, -8, -3, 0, 8], -3)).toBe(2);
    })
    it("Test binary search on a large array to check the algorithm's efficiency.", ()=>{
        expect(binarySearch(Array.from({length : 10000},((_, i) => i * 2)) , 6000)).toBe(3000);
    }, 500)
})