function solution(arr1, arr2) {
    if (arr1.length > arr2.length) return 1;
    if (arr1.length < arr2.length) return -1;
    if (arr1.length = arr2.length) {
        const sum1 = arr1.reduce((a, c) => a + c);
        const sum2 = arr2.reduce((a, c) => a + c);
        if (sum1 > sum2) return 1;
        if (sum1 < sum2) return -1;
        return 0;
    }
}