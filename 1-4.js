function cutStick(m, n) {
    let cuts = 0;
    let sticks = 1;
    let workers;

    while (sticks < n) {
        workers = Math.min(sticks, m)
        sticks += workers;
        cuts++;
    }

    console.log(cuts)

    return cuts
}

cutStick(3,20)
cutStick(5,100)

