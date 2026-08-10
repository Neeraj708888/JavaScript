
function memoize(fn) {
    let cache = {};  // create an Empty Object

    return function (value) {
        if (cache[value] !== undefined) {
            return cache[value];
        }

        cache[value] = fn(value);
        return cache[value];
    }
}