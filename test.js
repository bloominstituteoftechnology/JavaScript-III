function dice(sides, numberOfDie) {
    let working = [];
    let min = 1;
    for (i = 0; i < numberOfDie; i++) {
        working.push(Math.floor(Math.random() * (sides - min + 1)) + min);
    }
    return working.reduce((total, items) => total + items, 0);
}
