function cardFlippingSimulation(n) {
    let cards = Array(n).fill(false);

    for (let person = 1; person <= n; person++) {
        for (let i = person -1; i<n; i+= person) {
            cards[i] = !cards[i];
        }
    }
    let openCards = [];
    for (let i = 0; i < n; i++) {
        if (cards[i]) openCards.push(i+1);
    }
    console.log(openCards)
}

cardFlippingSimulation(100)