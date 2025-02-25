function getCoins(num, maxCoins) {
    let count = 0;

    for (let a = 0; a <= maxCoins; a++) {
        for (let b = 0; b <= maxCoins; b++) {
            for (let c = 0; c <= maxCoins; c++) {
                for (let d = 0; d <= maxCoins; d++) {
                    const totalCoins = a + b + c + d;
                    const totalAmount = a * 10 + b * 50 + c * 100 + d * 500;

                    if (totalCoins <= maxCoins && totalAmount === num) {
                        count++;
                    }
                }
            }
        }
    }
    console.log(count)
    return count
}

getCoins(1000, 15)