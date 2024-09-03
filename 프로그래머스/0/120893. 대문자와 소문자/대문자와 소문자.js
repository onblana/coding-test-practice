function solution(my_string) {
    const answer = [];
    for (const char of my_string) {
        char.charCodeAt() > 96
            ? answer.push(char.toUpperCase())
            : answer.push(char.toLowerCase());
    }
    return answer.join('');
}