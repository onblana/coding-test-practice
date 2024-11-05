function solution(myString) {
    return [...myString].map(char => {
        const ascii = char.charCodeAt();
        if (char === "a") return "A";
        if (ascii >= 66 && ascii <= 90) return char.toLowerCase();
        return char;
    }).join("");
}