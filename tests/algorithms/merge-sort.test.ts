import { describe, it, expect } from "bun:test";
import { mergeSort } from "src/algorithms/sorting/merge-sort";

describe("Merge sort", () => {
    it("should handle a sorted array", () => {
        expect(mergeSort([1, 2, 3, 4, 5, 6, 7], 0, 6)).toEqual([1, 2, 3, 4, 5, 6, 7])
    })
    it("should handle a reverse sorted array", () => {
        expect(mergeSort([7, 6, 5, 4, 3, 2, 1], 0, 6)).toEqual([1, 2, 3, 4, 5, 6, 7])
    })
    it("should handle an unsorted array", () => {
        expect(mergeSort([1, 3, 6, 2, 4, 7, 5], 0, 6)).toEqual([1, 2, 3, 4, 5, 6, 7])
    })
    it("should handle duplicate elements", () => {
        expect(mergeSort([7, 8, 2, 8, 2, 4, 3, 6, 7, 3, 4, 11, 22, 6, 15, 13, 11], 0, 16)).toEqual([2, 2, 3, 3, 4, 4, 6, 6, 7, 7, 8, 8, 11, 11, 13, 15, 22])
    })
    it("should handle identical elements", () => {
        expect(mergeSort([2, 2, 2, 2, 2, 2, 2], 0, 6)).toEqual([2, 2, 2, 2, 2, 2, 2])
    })
    it("should handle empty array", () => {
        expect(mergeSort([], 0, 0)).toEqual([])
    })
})