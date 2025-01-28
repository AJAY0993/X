import { describe, it, expect } from "bun:test";
import { twoSum } from '@arrays/easy/two-sum';

describe('two sum', () => {
    it("should return indices of the two numbers that add up to the target", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    })

    it("should return correct indicies for negative numbers", () => {
        expect(twoSum([-2, 1, 3, 5], 1)).toEqual([0, 2])
    })

    it('should return an empty array if no two numbers sum to the target', () => {
        expect(twoSum([1, 2, 3, 4], 10)).toEqual([-1,-1]); 
    });

    it('should handle an array with two numbers', () => {
        expect(twoSum([1, 5], 6)).toEqual([0, 1]); 
    });

    it('should handle an array with duplicate values correctly', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    it('should handle edge case where target is zero', () => {
        expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    });

    it('should return indices in the correct order', () => {
        expect(twoSum([5, 10, 7, 4], 9)).toEqual([0, 3]);
    });

    it('should work when there are large numbers in the array', () => {
        expect(twoSum([1000000, 100000000, 1000000000], 1001000000)).toEqual([0, 2]);
    });

    it('should handle an empty array', () => {
        expect(twoSum([], 5)).toEqual([-1,-1]);
    });

    it('should handle large input array efficiently', () => {
        const largeInput = Array(10 ** 6).fill(1);
        expect(twoSum(largeInput, 2)).toEqual([0, 1]);
    });
})