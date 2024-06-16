function solution(n, control) {
    const arr = control.split('');
    arr.forEach(char => {
        if (char === "w") n += 1;
        if (char === "s") n -= 1;
        if (char === "d") n += 10;
        if (char === "a") n -= 10;
    })
    return n;
}