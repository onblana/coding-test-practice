function solution(my_string, is_suffix) {
    const str = my_string.slice(my_string.length - is_suffix.length);
    return str === is_suffix ? 1 : 0;
}