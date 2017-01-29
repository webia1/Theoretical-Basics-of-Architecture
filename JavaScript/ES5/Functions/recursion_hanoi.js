function hanoi(discs, src, cache, dst) {
    if (discs > 0) {
        hanoi(discs - 1, src, dst, cache);
        console.log('disc ' + discs + ' from ' + src + ' to ' + dst);
        hanoi(discs - 1, cache, src, dst);
    }
}

hanoi(3, 'SOURCE', 'CACHE', 'DESTINATION');