function solution(priorities, location) {
    let count = 0;    
    const indexArr = [];
    for(let i = 0; i < priorities.length; i++) {
        indexArr[i] = i;
    } 

    while (priorities) {
        const maxValue = Math.max(...priorities);
        if (priorities[0] < maxValue) {
            const pShifted = priorities.shift();
            priorities.push(pShifted);
            const iShifted = indexArr.shift();
            indexArr.push(iShifted);
        } else {
            ++count;
            if (indexArr[0] === location) {
                return count;
            } else {
                priorities.shift();
                indexArr.shift();  
            }
        }
    }
    return count;
}