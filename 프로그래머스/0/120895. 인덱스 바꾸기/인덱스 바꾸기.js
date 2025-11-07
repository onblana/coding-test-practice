const solution = (str, num1, num2) => {
    const arr = str.split("");
    arr[num1] = str[num2];
    arr[num2] = str[num1];
    return arr.join("");
}