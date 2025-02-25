function becomesOne (num) {
    const original = num

    let current = 3 * num + 1;
    let iterations = 0;
    const maxIterations = 10000;

    while (current !== original && iterations < maxIterations) {
        if (current %2 === 0) {
            current = current/2;
        } else {
            current = current * 3 + 1
        }
        iterations++;
    }
    return current === original;
}

function countOne(n) {
    let count = 0;
    for (let n = 2; n<= 10000; n +=2 ) {
        if (becomesOne(n)) {
            count++
        }
    }
    console.log(count)
}

countOne(2)