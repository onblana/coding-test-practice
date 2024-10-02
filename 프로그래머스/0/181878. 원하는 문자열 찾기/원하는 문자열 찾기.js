const solution = (myString, pat) => {
    const str = myString.toLowerCase();
    const p = pat.toLowerCase();
    return str.includes(p) ? 1 : 0; 
}