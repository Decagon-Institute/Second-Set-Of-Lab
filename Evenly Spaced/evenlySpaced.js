function evenlySpaced(first, second, last) {
    return (first - second == second - last) || (first - last == last - second) || (first - second == last - first);
}

module.exports = evenlySpaced;