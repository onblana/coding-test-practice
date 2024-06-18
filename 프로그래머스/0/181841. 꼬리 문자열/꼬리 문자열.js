function solution(str_list, ex) {
    return str_list.filter(str => str.includes(ex) ? false : true).join('');
}