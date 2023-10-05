Here is a TypeScript solution for the problem:

```typescript
class RotatedArraySearch {
    public static search(nums: number[], target: number): number {
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);
            if (nums[mid] == target) {
                return mid;
            }
            if (nums[start] <= nums[mid]) {
                if (target >= nums[start] && target < nums[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                if (target > nums[mid] && target <= nums[end]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }
        return -1;
    }
}

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(RotatedArraySearch.search(nums, target));
```

This TypeScript solution uses a binary search approach to find the target in a rotated sorted array. The `search` method takes an array of numbers and a target number as input, and returns the index of the target in the array. If the target is not found, it returns -1. The `search` method is static, so it can be called directly on the class without creating an instance of the class. The `console.log` statement at the end of the script calls the `search` method with a sample array and target, and logs the result to the console.