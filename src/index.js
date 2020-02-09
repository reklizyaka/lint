const fNum = 3;
const sNum = 5;
function s(a, b) {
    return a + b + a;
}
function f(a, b, c) {
    function sum(d, e) {
        return d + e;
    }
    if (typeof c === 'function') {
        s(a, b);
        return a + b + a;
    } else {
        sum(a, b);
        return a + b;
    }
}
f(fNum, sNum, s);
