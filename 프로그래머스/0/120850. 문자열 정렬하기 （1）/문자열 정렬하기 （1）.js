function solution(my_string) {
    const charArr = my_string.split("");
    const numArr = [];
    charArr.forEach(el => {
        const ascii = el.charCodeAt();
        if (ascii >= 48 && ascii <= 57) numArr.push(Number(el));
    });
    return numArr.sort();
}