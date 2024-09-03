function solution(my_string) {
    let answer = '';
    for (const char of my_string) {
        char.charCodeAt() > 96
            ? answer += char.toUpperCase()
            : answer += char.toLowerCase();
    }
    return answer;
}