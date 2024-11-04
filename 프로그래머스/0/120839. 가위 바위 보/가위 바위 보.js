function solution(rsp) {
    return [...rsp].map(str => {
        if (str === "2") return 0;
        if (str === "0") return 5;
        if (str === "5") return 2;
    }).join("");
}