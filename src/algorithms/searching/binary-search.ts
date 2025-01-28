// You are given a sorted array of integers and a target, your task is to search for the target in the given array.
// Assume the given array does not contain any duplicate numbers.

/**
 * 
 * @param arr 
 * @param target 
 * @returns 
 */
export function binarySearch(arr:number[], target:number){
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((low + high) / 2);
    while(low <= high){
        mid = Math.floor((low + high) / 2);
        if(arr[mid] === target) return mid;
        else if (arr[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}