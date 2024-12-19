function solution(binomial) {
    const arr = binomial.split(" ");
    const num1 = Number(arr[0]);
    const num2 = Number(arr[2]);
    return arr[1] === "+" ? num1 + num2 : arr[1] === "-" ? num1 - num2 : num1 * num2;
}