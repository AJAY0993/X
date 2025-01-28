// Problem Statement: Given an array of integers arr[] and an integer target.
// Return indices of the two numbers such that their sum is equal to the target. Otherwise, return [-1, -1].

/**
 * 
 * @param arr 
 * @param target 
 * @returns 
 */

export function twoSum(arr: number[], target: number): [number, number] {
    const map = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i];
        const index = map.get(compliment);
        if (index !== undefined) {
            return [index, i];
        }
        map.set(arr[i], i);
    }
    return [-1, -1]
}