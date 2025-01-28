function merge<T>(nums: T[], low: number, mid: number, high: number) {
    let left = low;
    let right = mid + 1;
    let temp: T[] = [];
    while (left <= mid && right <= high) {
        if (nums[left] < nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(nums[left])
        left++;

    }
    while (right <= high) {
        temp.push(nums[right]);
        right++;
    }
    for(let i = low; i <= high; i++){
        nums[i] = temp[i - low];
    }
}

export function mergeSort<T>(nums: T[], low: number, high: number): T[] {
    let mid = Math.floor((high + low) / 2); // Low + (high - low) / 2
    if(low >= high) return nums;
    mergeSort(nums, low, mid);
    mergeSort(nums, mid + 1, high);
    merge<T>(nums, low, mid, high);
    console.log(nums)
    return nums;
}
