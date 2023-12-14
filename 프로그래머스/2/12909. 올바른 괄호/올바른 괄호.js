function solution(s){
    let flag = 0;
    
    for (let i = 0; i < s.length; i++) {
        (s[i] === '(') ? flag++ : flag--;
        if (flag < 0) return false;
    }
    
    return (flag === 0) ? true : false;
}