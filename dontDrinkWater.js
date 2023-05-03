function separateLiquids(glass) {
    let bottle = []
    const charts = {
        H: 1.36,
        W: 1,
        A: 0.87,
        O: 0.8
    }
    glass.forEach(arr => bottle = [...bottle, ...arr])
    bottle.sort((a,b) => charts[a] - charts[b])
    return glass.map(arr => arr.map(el  => bottle.shift()));
}

