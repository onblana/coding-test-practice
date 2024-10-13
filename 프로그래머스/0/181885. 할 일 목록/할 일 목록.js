function solution(todo, finished) {
    const unfinished = [];
    for (let i = 0; i < todo.length; ++i) {
        if (!finished[i]) unfinished.push(todo[i]);
    }
    return unfinished;
}