function delayPrinting (n, m) {
    for (let i = n; i <= m; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
}
delayPrinting(1, 10);
