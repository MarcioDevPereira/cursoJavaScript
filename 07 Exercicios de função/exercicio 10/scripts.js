function loop (x) {
    for (let num = x; num > 0; num--){
        if (num % 2 == 0) {
            console.log(`${num} é um numero par`);
        }
    }
}

loop(30);