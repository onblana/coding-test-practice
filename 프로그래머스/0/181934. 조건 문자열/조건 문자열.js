function solution(ineq, eq, n, m) {
    const ineqeq = ineq + eq;
    if (ineqeq === ">=") return n >= m ? 1 : 0;
    if (ineqeq === "<=") return n <= m ? 1 : 0;
    if (ineqeq === ">!") return n > m ? 1 : 0;
    if (ineqeq === "<!") return n < m ? 1 : 0;
}