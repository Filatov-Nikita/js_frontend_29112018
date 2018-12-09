export function divide(a, b) {
    a.b();
    if(b === 0) {
        throw new Error('division by zero'); // можно сделать хоть throw 1
    }
    return a / b;
}
