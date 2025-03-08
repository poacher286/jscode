/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let i = nums.length - 1;
    let ans = new Array(nums.length);

    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            ans[i--] = nums[left] * nums[left];
            left++;
        }else{
            ans[i--] = nums[right] * nums[right];
            right--;
        }
    }

    return ans;
};

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));