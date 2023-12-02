function solution(players, callings) {
    const playerObj = {};
    
    for (let i = 0; i < players.length; ++i) {
        playerObj[players[i]] = i;
    }
    // {mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4}
    
    let idx = 0;
    let temp = '';
    for (let i = 0; i < callings.length; ++i) {
        idx = playerObj[callings[i]] // indexOf를 쓰지 않아도 인덱스를 알아낼 수 있다!
        temp = players[idx - 1];
        
        // swap
        players[idx - 1] = callings[i];
        players[idx] = temp;
        
        playerObj[callings[i]] -= 1;
        playerObj[temp] += 1;
    }
    
    return players;
}


/*
// 알게된 점: indexOf, splice 메소드는 시간복잡도가 높다.

// 1차 시도 - 시간초과 68점
function solution(players, callings) {
    let index = 0;
    for (let i = 0; i < callings.length; ++i) {
        index = players.indexOf(callings[i]);
        players.splice(index, 1); // 시간초과
        players.splice(index - 1, 0, callings[i]); // 시간초과
    }
    return players;
}


// 2차 시도 - 시간초과 68점.
function solution(players, callings) {
    let index = 0;
    let popped = '';
    let spliced = [];
    for (let i = 0; i < callings.length; ++i) {
        index = players.indexOf(callings[i]);

        spliced = players.splice(index, players.length - index);
        spliced.shift();
        
        popped = players.pop();
        players.push(callings[i]);
        players.push(popped);
        players = players.concat(spliced);
        
        spliced.length = 0; // 재사용을 위한 배열 초기화
        popped = '';
    }
    return players;
}
*/