function solution(nums) {
    const numSet = [...new Set(nums)];
    
    if (numSet.length > (nums.length / 2))
        return nums.length / 2;
    else return numSet.length;
}