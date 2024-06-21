function solution(my_string) {
    const array = my_string.split(' ');
    return array.filter(el => el.length > 0);
}