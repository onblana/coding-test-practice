function solution(price) {
    let discounted = 0;
    if (price < 100000) discounted = price;
    if (price >= 100000 && price < 300000) discounted = price * 0.95;
    if (price >= 300000 && price < 500000) discounted = price * 0.9;
    if (price >= 500000) discounted = price * 0.8;
    return Math.floor(discounted);
}